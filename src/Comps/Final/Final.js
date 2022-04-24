import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function Final() {
  const history = useHistory();
  const MainData = useSelector((state) => state.MainData);
  const postDtat = async function (MainData, history) {
    await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ order: MainData.order, user: MainData.user }),
    });
    history.push("/");
  };
  return (
    <>
      <h1>{MainData.user.name}</h1>
      <h1>{MainData.user.address}</h1>
      {MainData.order.map((item) => (
        <h1 key={item.key}>{`${item.name}, ${item.amount}`}</h1>
      ))}
      <button type="button" onClick={postDtat.bind(null, MainData, history)}>
        Done
      </button>
    </>
  );
}

export default Final;
