class userData {
  constructor() {
    this.name = "";
    this.address = "";
    this.done = null;
    this.key = null;
  }
  setStateCallBack(pre) {
    return pre + 1;
  }
  orderHandler(setState, id, event) {
    this[id] = event.target.value;
    setState(this.setStateCallBack);
  }
  doneHandler(dispatch, history) {
    history.push("./order");
    dispatch(this.done({ name: this.name, address: this.address }));
    dispatch(this.key());
    this.reset();
  }
  reset() {
    this.name = "";
    this.address = "";
    this.done = null;
  }
}
const UserData = new userData();
export default UserData;
