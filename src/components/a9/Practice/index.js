import React from "react";
import {Link} from "react-router-dom";
import Movies from "./Movies/index";



const Practice = () => {
    return(
        <>
            <h1>Practice</h1>
            <Link to="/a9/twitter/home">
                AS9 Build
            </Link>
            <br/>
            <Link to="/a8/practice">
                AS8 Practice
            </Link> |
            <Link to="/a8/twitter/home">
                AS8 Build
            </Link>
            <br/>
            <Link to="/a7/practice">
                AS7 Practice
            </Link> |
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
            <Movies/>

        </>
    )
};



export default Practice;
