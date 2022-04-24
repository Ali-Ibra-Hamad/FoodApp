import "./Block.css";
function Block(probs) {
  return (
    <div
      className="Block"
      onClick={function () {
        probs.changeCart("no", false);
      }}
    ></div>
  );
}

export default Block;
