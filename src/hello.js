import react from "react";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import Hello from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice/index";
import Build from "./components/a6/Build/index";
import {BrowserRouter, Route} from "react-router-dom";

function HelloWorld() {
  return (
      <BrowserRouter>
          <div className="container">
              <Route path="/a6/hello" exact={true}>
                  <Hello/>
              </Route>
              <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                  <Practice/>
              </Route>
              <Route path="/a6/Build" exact={true}>
                  <Build/>
              </Route>
          </div>
      </BrowserRouter>
  );
}


export default HelloWorld; 