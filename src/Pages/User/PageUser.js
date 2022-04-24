import { useSelector } from "react-redux";
import User from "./../../Comps/User/User";
import { Redirect } from "react-router-dom";

function PageUser() {
  const UserKey = useSelector((state) => state.Keys.UserKey);
  return <>{UserKey ? <User /> : <Redirect to="./" />}</>;
}

export default PageUser;
