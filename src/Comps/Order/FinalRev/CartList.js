import CartItem from "./CartItem";
import Final from "./Final";
import "./CartList.css";
const prepareList = function (probs) {
  return probs.listOfFood
    .filter(function (item) {
      return item.amount > 0;
    })
    .map((item) => (
      <CartItem
        item={item}
        changeAmount={probs.changeAmount}
        key={item.key}
      ></CartItem>
    ));
};
function CartList(prepareList, probs) {
  return (
    <div className="CartList">
      {prepareList(probs)}
      <Final totalAmount={probs.totalAmount} changeCart={probs.changeCart} />
    </div>
  );
}

export default CartList.bind(null, prepareList);
