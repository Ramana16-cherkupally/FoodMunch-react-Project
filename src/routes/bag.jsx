import { useSelector } from "react-redux";
import { CartBag } from "../Components/CartBag";
import { CardSummary } from "../Components/CardSummary";

export const Bag = () => {
  const { items } = useSelector((state) => state.FoodMunch || {});
  const BagItem = useSelector((state) => state.Bag);
  console.log("FoodMunch data:", items);
  console.log("Bag Items:", BagItem);

  if (!items || items.length === 0) {
    return <p>Loading food data...</p>;
  }

  // const foodItems = FoodMunch[0].foodItems || [];
  const finalItem = items.filter((item) => BagItem.includes(item.id));

  return (
    <main style={{ marginTop: "4rem" }}>
      <div className="container">
        <div className="row">
          {/* Left Side: CartBag Items */}
          <div className="col-md-8 ">
            {finalItem.length > 0 ? (
              finalItem.map((item) => <CartBag key={item.id} Item={item} />)
            ) : (
              <h1 className="text-center text-danger">No items in your bag!</h1>
            )}
          </div>

          {/* Right Side: CardSummary Fixed */}
          <div className="col-md-4 ">
            <div className=" w-100 position-sticky mt-4">
              <CardSummary />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
