class appData {
  constructor() {
    this.order = [];
    this.user = {};
  }
  setStateCallBack(pre) {
    return pre + 1;
  }
  orderHandler(setHistory, order) {
    this.order = order;
    setHistory.push("./final");
  }
  userHandler(setHistory, user) {
    this.user = user;
    setHistory.push("./order");
  }
  async postDtat(setHistory) {
    await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ order: this.order, user: this.user }),
    });
    this.reset();
    setHistory.push("./");
  }
  reset() {
    this.order = [];
    this.user = {};
  }
}
const AppData = new appData();
export default AppData;
