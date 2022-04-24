import { Route, Switch, Redirect } from "react-router-dom";
import PageOrder from "./Pages/Order/PageOrder";
import PageUser from "./Pages/User/PageUser";
import PageFinal from "./Pages/Final/PageFinal";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Food App</h1>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/order">
          <PageOrder />
        </Route>
        <Route path="/home">
          <PageUser />
        </Route>
        <Route path="/final">
          <PageFinal />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
