import React, { useState, useEffect } from "react";
import OrderData from "./orderData";
import ItemList from "./MainList/ItemList";
import CartList from "./FinalRev/CartList";
import Block from "./../UI/Block";
import { useDispatch } from "react-redux";
import MainData from "../../Store/MainData/MainData";
import Keys from "../../Store/Keys/Keys";
import { useHistory } from "react-router-dom";

function Order(OrderData) {
  OrderData.finish = MainData.actions.OrderHandler;
  OrderData.key = Keys.actions.FinalHandler;
  const [_, setState] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(
    function (OrderData) {
      OrderData.backFetch(setState);
    }.bind(null, OrderData, setState),
    []
  );
  return (
    <>
      {OrderData.error && (
        <Block changeCart={OrderData.cartHandler.bind(OrderData, setState)} />
      )}
      {OrderData.lodaing && (
        <Block changeCart={OrderData.cartHandler.bind(OrderData, setState)} />
      )}
      {OrderData.start && (
        <div>
          <ItemList
            listOfFood={OrderData.foods}
            changeAmount={OrderData.amountHandler.bind(OrderData, setState)}
          />
          {OrderData.cartStatus && (
            <Block
              changeCart={OrderData.cartHandler.bind(OrderData, setState)}
            />
          )}
          {OrderData.cartStatus && (
            <CartList
              listOfFood={OrderData.foods}
              changeAmount={OrderData.amountHandler.bind(OrderData, setState)}
              totalAmount={OrderData.tamout()}
              changeCart={OrderData.cartHandler.bind(
                OrderData,
                setState,
                dispatch,
                history
              )}
            />
          )}
          <button
            type="button"
            onClick={OrderData.cartHandler.bind(
              OrderData,
              setState,
              dispatch,
              history,
              "no",
              true
            )}
          >
            Cart
          </button>
        </div>
      )}
    </>
  );
}

export default Order.bind(null, OrderData);
