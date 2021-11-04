import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Todo from "./Todo/TodoList";
import ReduxExamples from "./ReduxExamples/components";



const Practice = () => {
    return(
        <>
            <h1>Practice</h1>
            <Link to="/a7/twitter/home">
                AS7 Build
            </Link>
            <br/>
            <Link to="/a6/hello">
                AS6 Hello
            </Link> |
            <Link to="/a6/practice">
                AS6 Practice
            </Link> |
            <Link to="/a6/twitter/home">
                AS6 Build
            </Link>
            <ReduxExamples/>
            <Todo/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>

        </>
    )
};



export default Practice;
