import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";
export const Menu = ({ Item }) => {
  return (
    <div className="card h-100 w-100 p-2">
      <img className="rounded-2" src={Item.img} alt={Item.name} />
      <div className="d-flex justify-content-start align-items-center py-2">
        <span className="badge bg-warning text-dark me-1 ">
          {Item.rating} <IoMdStar />
        </span>
        <span className="badge bg-warning text-dark me-1 ">
          {Item.review_rating}
          <IoMdStar />
        </span>
        <small className="text-muted">({Item.reviews_count})</small>
      </div>
      <h5 className="card-title fw-bold p-0 m-0">{Item.name}</h5>
      <span className="text-muted">{Item.place}</span>
      <Link to={`/restaurant/${Item.id}`}>
        <button className="btn btn-primary w-50 mt-auto">View Details</button>
      </Link>
    </div>
  );
};
