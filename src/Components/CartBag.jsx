import { useDispatch } from "react-redux";
import { BagActions } from "../store/ItemBag";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const CartBag = ({ Item }) => {
  const usedispatch = useDispatch();

  const handleDeleteItem = () => {
    usedispatch(BagActions.RemoveFromBag(Item.id));
  };

  return (
    <div className="container mt-4">
      <div className="col mb-4">
        <div className="card h-95 position-relative p-1">
          <span
            onClick={() => handleDeleteItem(Item.id)}
            type="button"
            className="position-absolute fs-3 top-0 end-0 text-danger me-2"
            aria-label="Close"
          >
            <RiDeleteBin5Fill />
          </span>
          <div className="row align-items-start">
            <div className="col-md-4">
              <img
                className="img-fluid rounded-2"
                src={Item.img}
                alt={Item.name}
                style={{ height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-6">
              <h4 className="card-title">{Item.name}</h4>
              <p className="product-description mb-2">{Item.description}</p>
              <div className="price d-flex align-items-center">
                <span className="actual-price fw-bold text-danger me-2">
                  ₹{Item.price}
                </span>
                <span className="original-price text-muted text-decoration-line-through me-2">
                  ₹{Item.actualPrice}
                </span>
                <span className="discount text-success">
                  ({Item.discount}% OFF)
                </span>
              </div>
              {/* <div className="mt-2">
                <button className="btn btn-outline-primary btn-sm">-</button>
                <span className="quantity-value mx-1">{Item.quantity}</span>
                <button className="btn btn-outline-primary btn-sm">+</button>
              </div> */}
              <div>
                Delivery in <span className="text-success">10 Min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
