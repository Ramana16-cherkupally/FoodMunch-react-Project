import { useSelector } from "react-redux";
import { HomeCart } from "../Components/HomeCart";
import { useOutletContext } from "react-router-dom";

export const Home = () => {
  const { search } = useOutletContext(); // ✅ Get context data
  const { items = [] } = useSelector((state) => state.FoodMunch || {});

  // 🔥 Filter items based on search input
  const filteredItems = (items || []).filter((item) =>
    item?.name?.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <main className="menu-items" style={{ margin: "5rem auto" }}>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 justify-content-center">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div className="col" key={item.id}>
                <div className="card h-100 ">
                  <HomeCart Item={item} />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center mt-5">
              <h5 className="text-danger mt-5">No items found 🙁</h5>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
