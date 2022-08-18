//import Login from "./login/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./pages/details/Details";
import Home from "./pages/home/Home";
import Opt from "./pages/opt/opt";
import Topbar from "./pages/topbar/Topbar";





function App() {
  const user = true;
  return (
    <>
      <Router>

      <Topbar />
      <Switch>
      <Route exact path="/">
          < Home />
        </Route>
        <Route exact path="/display">
          <Details />
        </Route>
        <Route exact path="/main">
          <Opt/>
        </Route>
      </Switch>
      </Router></> 

  );
}
export default App;