import food from "./OrderBack";
class orderData {
  constructor() {
    this.foods = [];
    this.cartStatus = false;
    this.lodaing = true;
    this.error = "";
    this.start = false;
    this.finish = null;
    this.key = null;
    this.dev = true;
  }
  tamout() {
    return this.foods.reduce(function (cum, item) {
      return cum + item.price * item.amount;
    }, 0);
  }
  cartHandler(setState, dispatch, history, value, show) {
    this.cartStatus = show;
    if (value === "yes") {
      history.push("./final");
      dispatch(this.finish(this.finalOrder()));
      dispatch(this.key());
      this.reset();
    }
    setState(this.setStateCallBack);
  }
  amountHandler(setState, value, key) {
    const preAmount = this.foods[key].amount;
    this.foods[key].amount =
      value === "++"
        ? preAmount + 1
        : preAmount > 0
        ? preAmount - 1
        : preAmount;
    setState(this.setStateCallBack);
  }
  setStateCallBack(pre) {
    return pre + 1;
  }
  async backFetch(setState) {
    this.lodingStatus(true);
    this.errorStatus("");
    try {
      const jsonData = await fetch("");
      !jsonData.ok && this.errorMsg("something went wrong");
      const data = await jsonData.json();
      !data && this.errorMsg("something went wrong");
      this.handleData(data);
      this.lodingStatus(false);
      this.startStatus();
    } catch (err) {
      if (this.dev) {
        this.handleData(food);
        this.startStatus();
      } else {
        this.errorStatus(err);
      }
      this.lodingStatus(false);
    }
    setState(this.setStateCallBack);
  }
  errorMsg(msg) {
    throw new Error(msg);
  }
  errorStatus(err) {
    this.error = err;
  }
  lodingStatus(status) {
    this.lodaing = status;
  }
  startStatus() {
    this.start = !this.start;
  }
  handleData(data) {
    this.foods = Object.entries(data).map((item) => item[1]);
  }
  finalOrder() {
    return this.foods.filter((item) => item.amount > 0);
  }
  reset() {
    this.foods = [];
    this.cartStatus = false;
    this.lodaing = true;
    this.error = "";
    this.start = false;
    this.finish = null;
  }
}
const OrderData = new orderData();
export default OrderData;
