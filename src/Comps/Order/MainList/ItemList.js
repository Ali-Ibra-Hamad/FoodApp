import Item from "./Item";
const prepareList = function (probs) {
  return probs.listOfFood.map((item) => (
    <Item item={item} changeAmount={probs.changeAmount} key={item.key}></Item>
  ));
};
function ItemList(prepareList, probs) {
  return <>{prepareList(probs)}</>;
}

export default ItemList.bind(null, prepareList);
