import React, { useState } from "react";
import { useDispatch } from "react-redux";
import MainData from "../../Store/MainData/MainData";
import Keys from "../../Store/Keys/Keys";
import Userdata from "./userData";
import { useHistory } from "react-router-dom";

function User(Userdata) {
  const [_, setState] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  Userdata.done = MainData.actions.UserrHandler;
  Userdata.key = Keys.actions.OrderHandler;
  return (
    <>
      <label>name:</label>
      <br />
      <input
        autoComplete="off"
        type="text"
        id="name"
        value={Userdata.name}
        onChange={Userdata.orderHandler.bind(Userdata, setState, "name")}
      />
      <br />
      <label>adress:</label>
      <br />
      <input
        autoComplete="off"
        type="text"
        id="address"
        value={Userdata.address}
        onChange={Userdata.orderHandler.bind(Userdata, setState, "address")}
      />
      <br />
      <button
        type="button"
        onClick={Userdata.doneHandler.bind(Userdata, dispatch, history)}
      >
        Done
      </button>
    </>
  );
}

export default User.bind(null, Userdata);
