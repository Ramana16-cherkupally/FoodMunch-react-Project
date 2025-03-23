import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SetOrderPlaced } from "../store/orderSlice";

export const CardSummary = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const isOrderPlaced = useSelector((state) => state.Order.isOrderPlaced);
  const { items } = useSelector((state) => state.FoodMunch);
  const BagItem = useSelector((state) => state.Bag);
  const finalItem = items.filter((foodItem) => BagItem.includes(foodItem.id));
  let TotalItems = BagItem.length;
  let DeliveryCharge = 45;
  let TotalMRP = 0;
  let TotalDiscount = 0;

  finalItem.forEach((bagItem) => {
    TotalMRP += bagItem.actualPrice;
    TotalDiscount += bagItem.actualPrice - bagItem.price;
  });
  let finalPayment = TotalMRP - TotalDiscount + DeliveryCharge;

  const GotoFillDetails = () => {
    console.log("Is order placed?", isOrderPlaced);
    dispatch(SetOrderPlaced(true));

    if (finalPayment > 45) {
      Navigate("/app/placeorder");
    } else {
      alert("Your cart is empty. Please add items before proceeding.");
    }
  };

  return (
    <div className="col">
      <div>Price details ({TotalItems} Items)</div>
      <div className="card h-90 p-3">
        <div className="price-section">
          <span>Total MRP</span>
          <span> &#8377;{TotalMRP}</span>
        </div>
        <div className="price-section">
          <span>Discount on MRP</span>
          <span> &#8377;{TotalDiscount}</span>
        </div>
        <div className="price-section">
          <span>Delivery Charge </span>
          <span className="text-success"> -&#8377;{DeliveryCharge}</span>
        </div>

        <hr className="my-1 border-secondary" />
        <div className="price-section">
          <span>Total Amount</span>
          <span>&#8377;{finalPayment}</span>
        </div>
        <div className="mt-auto">
          <div className="nav-link hover-effect text-white">
            <button className="btn btn-danger w-100" onClick={GotoFillDetails}>
              {isOrderPlaced ? "Continue" : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
