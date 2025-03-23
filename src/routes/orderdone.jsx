import { IoMdCloudDone } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export const OrderDone = () => {
  const Navigate = useNavigate();
  const handleClickBack = () => {
    Navigate("/app");
  };
  return (
    <section className="container">
      <div className=" orderdone-icon">
        <span>
          <IoMdCloudDone style={{ fontSize: "20rem", color: "greenyellow" }} />
        </span>
        <div>
          <span>
            Your order is confirmed!
            <strong>Fresh and fast — arriving in just 10 minutes!</strong>
          </span>
        </div>
        <button className="btn btn-primary" onClick={handleClickBack}>
          Back To Home
        </button>
      </div>
    </section>
  );
};
