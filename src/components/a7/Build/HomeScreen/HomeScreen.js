import React from "react";
import NavigationSidebar from "../NavigationSidebar/index";
import PostSummaryList from "../PostSummaryList/PostSummaryList";
import PostList from "../PostList/PostSummaryList";
import './home.css';

const HomeScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                <PostList/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
            <li className = 'list-group-item fw-bold text-white wd-whats rounded-top border-0'>What's happening</li>
                <PostSummaryList/>
            </div>
        </div>
    );
};
export default HomeScreen;