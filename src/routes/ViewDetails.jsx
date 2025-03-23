import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const ViewDetails = () => {
  const { restaurantId } = useParams();
  const FoodMunch = useSelector((store) => store.FoodMunch);

  console.log("Params (restaurantId):", restaurantId);
  console.log("FoodMunch Data:", JSON.stringify(FoodMunch, null, 2));

  if (!FoodMunch || FoodMunch.length === 0) {
    console.log("FoodMunch is empty or not loaded yet.");
    return <h2>Loading... or No Restaurants Found</h2>;
  }

  const restaurant = FoodMunch.find(
    (item) => String(item.id) === String(restaurantId)
  );

  console.log("Found Restaurant:", restaurant);

  if (!restaurant) {
    return <h2>Restaurant not found</h2>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">{restaurant.restaurant}</h1>
      <div className="card p-3">
        <img
          src={restaurant.details?.[0]?.img || "fallback-image.jpg"}
          alt={restaurant.restaurant}
          className="img-fluid mb-3"
        />
        <p>
          <strong>Location:</strong>{" "}
          {restaurant.details?.[0]?.location || "Location not available"}
        </p>
        <p>
          <strong>Rating:</strong> {restaurant.details?.[0]?.rating || "N/A"}
        </p>
        <p>
          <strong>Reviews:</strong>{" "}
          {restaurant.details?.[0]?.reviews_count || "No reviews yet"}
        </p>
      </div>

      {/* Display Food Items */}
      <div className="mt-4">
        <h2>Menu</h2>
        <div className="row">
          {restaurant.foodItems?.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={item.img} alt={item.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">
                    <strong>Price:</strong> ₹{item.price}{" "}
                    {item.actualPrice && (
                      <span className="text-muted text-decoration-line-through">
                        ₹{item.actualPrice}
                      </span>
                    )}
                  </p>
                  {item.discount > 0 && (
                    <p className="card-text text-success">
                      <strong>Discount:</strong> ₹{item.discount} off
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
