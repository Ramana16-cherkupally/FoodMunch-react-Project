import { useDispatch, useSelector } from "react-redux";
import { BagActions } from "../store/ItemBag";
import { GrAddCircle } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

export const HomeCart = ({ Item }) => {
  const usedispatch = useDispatch();
  const BagElements = useSelector((state) => state.Bag);
  const ElementFound = BagElements.indexOf(Item.id) >= 0;
  console.log(Item.id, ElementFound);
  const handleAddtoBag = () => {
    usedispatch(BagActions.AddToBag(Item.id));
  };
  const handleRemoveFromBag = () => {
    usedispatch(BagActions.RemoveFromBag(Item.id));
    console.log(Item.id, "removed");
  };

  return (
    <div className="card h-100 w-100 p-1">
      <img className="rounded-1 " src={Item.img} alt={Item.name} />
      <h4 className="card-title mt-auto">{Item.name}</h4>

      <div className="product-description">{Item.description}</div>
      <div className="mt-auto">
        <span className="fw-bold">&#8377;{Item.price}</span>
        <span className="orginal-price">&#8377;{Item.actualPrice}</span>
        <span style={{ color: "red" }}>(Rs.{Item.discount}% OFF)</span>
      </div>

      {ElementFound ? (
        <button
          className="btn btn-danger mt-auto mt-1"
          onClick={handleRemoveFromBag}
        >
          <MdDelete />
          Remove
        </button>
      ) : (
        <button className="btn btn-success mt-auto" onClick={handleAddtoBag}>
          <GrAddCircle /> Order Now
        </button>
      )}
    </div>
  );
};
