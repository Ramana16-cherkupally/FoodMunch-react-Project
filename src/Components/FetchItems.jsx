import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemsActions } from "../store/ItemSlice";
import { FetchStatusActions } from "../store/FetchStatusSlice";

export const FetchItems = () => {
  const fetchstatus = useSelector((store) => store.fetchstatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchstatus.fetchDone) return; // ✅ Skip fetch if already done

    const controller = new AbortController();
    const signal = controller.signal;
    let isMounted = true; // ✅ Track component state

    dispatch(FetchStatusActions.FetchingStarted());

    fetch("http://localhost:9002/items", { signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed with status ${res.status}`);
        return res.json();
      })
      .then(({ items }) => {
        if (isMounted) {
          console.log("✅ Items fetched:", items);

          // ✅ Ensure Redux state updates properly
          dispatch(FetchStatusActions.FetchmarkDone());
          dispatch(FetchStatusActions.FetchingFinished());
          dispatch(ItemsActions.addInitialItems(items[0] ?? {}));
        }
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("⚠️ Fetch was aborted (cleanup or unmount)");
        } else {
          console.error("❌ Error fetching items:", error.message || error);
        }
      })
      .finally(() => {
        if (isMounted) {
          console.log("✅ Fetch completed, ending loading state");
          dispatch(FetchStatusActions.FetchingFinished());
        }
      });

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [fetchstatus.fetchDone, dispatch]);

  // ✅ Render spinner or data properly
  if (!fetchstatus.fetchDone) return <div>Loading...</div>;

  return <></>;
};
