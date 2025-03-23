import { Outlet } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { FetchItems } from "../Components/FetchItems";
import { useSelector } from "react-redux";
// import { LoadingSpinner } from "../Components/LoadingSpinner";
import { useState } from "react";
import { ShimmerCard } from "../Components/ShimmerCards";

export const App = () => {
  const fetchstatus = useSelector((store) => store.fetchstatus);
  const [search, setSearch] = useState("");
  return (
    <>
      <Header search={search} updatechange={setSearch} />
      <FetchItems />
      {fetchstatus.currentFetching ? (
        // <LoadingSpinner />  🔥 Pass data to Outlet!
        <ShimmerCard />
      ) : (
        <Outlet context={{ search, setSearch }} />
      )}
      <Footer />
    </>
  );
};
