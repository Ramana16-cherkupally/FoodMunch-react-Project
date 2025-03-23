export const ShimmerCard = () => {
  return (
    <div className="d-flex flex-wrap container mt-5">
      {Array.from({ length: 500 }).map((currEle, index) => {
        return (
          <div
            key={index}
            className=" ProductItem-card shimmercard text-capitalize mx-auto my-2 rounded"
          ></div>
        );
      })}
    </div>
  );
};
