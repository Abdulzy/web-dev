import React from "react";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import PracticeAs6 from "./components/a6/Practice";
import HelloWorldAs6 from "./components/a6/HelloWorld"
import BuildAs6 from "./components/a6/Build";
import HomeScreenAs6 from "./components/a6/Build/HomeScreen/HomeScreen";
import ExploreScreenAs6 from "./components/a6/Build/ExploreScreen/ExploreScreen";
import Practice from "./components/a7/Practice/index";
import Build from "./components/a7/Build/index";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
          <Route path={["/a6", "/a6/practice"]} exact={true}>
                  <PracticeAs6/>
            </Route>
            <Route path="/a6/hello" exact={true}>
                <HelloWorldAs6/>
            </Route>
            <Route path="/a6/build" exact={true}>
                <BuildAs6/>
            </Route>
            <Route path="/a6/twitter/home" component={HomeScreenAs6} exact={true}/>
            <Route path="/a6/twitter/explore" component={ExploreScreenAs6} exact={true}/>
          

            <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                <Practice/>
            </Route>
            <Route path="/a7/twitter">
                <Build/>
            </Route>
          </div>
      </BrowserRouter>
  );
}


export default App; 