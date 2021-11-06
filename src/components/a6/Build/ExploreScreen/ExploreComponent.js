import React from "react";
import PostSummaryList from "../PostSummaryList/PostSummaryList";
import './explore.css';

const ExploreComponent = () => {
    return(
        <div>
            <div className='row'>
                <div className='col-11'>
                    <div className='position-relative'>
                        <span className='wd-search-icon'><i className='fas fa-search'></i></span>
                        <input type='text' className='form-control rounded-pill wd-pad-left' style={{paddingleft: "100px"}} placeholder='Search Twitter' />
                    </div>
                </div>
                <div className='col-1'>
                    <i className='fas fa-cog fa-2x wd-setting-color'></i>
                </div>
           </div>
           <ul className='nav mt-2 mb-2 nav-tabs'>
                <li className='nav-item'>
                <a className='nav-link active' href='for-you.html'>For you</a>
                </li>
                <li className='nav-item'>
                <a className='nav-link' href='trending.html'>Trending</a>
                </li>
                <li className='nav-item'>
                <a className='nav-link' href='news.html'>News</a>
                </li>
                <li className='nav-item'>
                <a className='nav-link' href='sports.html'>Sports</a>
                </li>
                <li className='nav-item d-none d-md-inline'>
                <a className='nav-link' href='entertainment.html'>Entertainment</a>
                </li>
           </ul>
           <div className='position-relative'>
                <img className='img-fluid mt-2' src='/a5/images/spaceX.png' alt=''/>
                <span className='wd-bottom-left'>SpaceX's Starship</span>
            </div>
            <div>
                {PostSummaryList()}
            </div>
        </div>
    );
}

export default ExploreComponent;
