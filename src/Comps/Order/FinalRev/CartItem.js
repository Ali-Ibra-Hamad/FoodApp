function CartItem(probs) {
  return (
    <>
      <h4>{`${probs.item.name} ${probs.item.subname} ${probs.item.price} ${probs.item.amount}`}</h4>
      <button
        className="cart"
        type="button"
        onClick={function () {
          probs.changeAmount("++", probs.item.key);
        }}
      >
        +
      </button>
      <button
        className="cart"
        type="button"
        onClick={function () {
          probs.changeAmount("--", probs.item.key);
        }}
      >
        -
      </button>
    </>
  );
}

export default CartItem;
