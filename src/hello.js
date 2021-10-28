import React from "react";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import Hello from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice/index";
import Build from "./components/a6/Build/index";
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";

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
            <Route path="/a6/twitter/home" component={HomeScreen}/>
            <Route path="/a6/twitter/explore" component={ExploreScreen}/>


          </div>
      </BrowserRouter>
  );
}


export default HelloWorld; 