import Order from "./../../Comps/Order/Order";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function OrderUser() {
  const OrderKey = useSelector((state) => state.Keys.OrderKey);

  return <>{OrderKey ? <Order /> : <Redirect to="./" />}</>;
}

export default OrderUser;
