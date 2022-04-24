import Final from "./../../Comps/Final/Final";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function FinalUser() {
  const FinalKey = useSelector((state) => state.Keys.FinalKey);

  return <>{FinalKey ? <Final /> : <Redirect to="./" />}</>;
}

export default FinalUser;
