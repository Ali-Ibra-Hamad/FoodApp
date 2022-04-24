function Item(probs) {
  return (
    <>
      <h1>{`${probs.item.name} ${probs.item.subname} ${probs.item.price} ${probs.item.amount}`}</h1>
      <button
        type="button"
        onClick={function () {
          probs.changeAmount("++", probs.item.key);
        }}
      >
        ++
      </button>
      <button
        type="button"
        onClick={function () {
          probs.changeAmount("--", probs.item.key);
        }}
      >
        --
      </button>
    </>
  );
}

export default Item;
