function Final(probs) {
  return (
    <>
      <h1>{probs.totalAmount}</h1>
      <button
        className="cart"
        type="button"
        onClick={function () {
          probs.changeCart("yes", false);
        }}
      >
        yes
      </button>
      <button
        type="button"
        className="cart"
        onClick={function () {
          probs.changeCart("no", false);
        }}
      >
        no
      </button>
    </>
  );
}

export default Final;
