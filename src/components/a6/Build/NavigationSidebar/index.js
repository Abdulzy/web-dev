import {Link} from "react-router-dom";
const NavigationSidebar = ({
    active = 'home'
}) => {
    return(
        <div className = 'list-group mr-1 '>
            <Link to="/a6/" className = 'list-group-item'>
                <i className='fab fa-twitter fa-inverse'></i> 
            </Link>
            <Link to="/a6/twitter/home" className = {`list-group-item ${active === 'home' ? 'active' : ''}`} >
                <i className='fas fa-home fa-inverse '></i>
                <span className='d-none d-xl-inline text-white'>   Home</span>
            </Link>
            <Link to="/a6/twitter/explore"className = {`list-group-item  ${active === 'explore' ? 'active' : ''}`} href='../ExploreScreen/explore.html'>
                <i className='fas fa-hashtag fa-inverse'></i>
                <span className='d-none d-xl-inline text-white'>   Explore</span>
            </Link>
            <Link to="/a6/twitter/notifications" className = 'list-group-item' >
                <i className='fas fa-bell fa-inverse'></i>
                <span className='d-none d-xl-inline text-white'>   Notifications</span>                    
            </Link>
            <Link to="/a6/twitter/messages" className = 'list-group-item' >
                <i className='fas fa-envelope fa-inverse'></i>
                <span className='d-none d-xl-inline text-white'>   Messages</span>                    
            </Link>
            <Link to="/a6/twitter/bookmarks" className = 'list-group-item' >
                <i className='fas fa-bookmark fa-inverse'></i>
                <span className='d-none d-xl-inline text-white'>   Bookmarks</span>                    
            </Link>
            <Link to="/a6/twitter/lists" className = 'list-group-item' >
                <i className='fas fa-list fa-inverse'></i>
                <span className='d-none d-xl-inline text-white'>   Lists</span>                    
            </Link>
            <Link to="/a6/twitter/profile" className = 'list-group-item' >
                <i className='fas fa-user fa-inverse'></i>
                <span className='d-none d-xl-inline text-white'>   Profile</span>                    
            </Link>
            <Link to="/a6/twitter/more" className = 'list-group-item' >
                <i className='fas fa-comment-dots fa-inverse'></i>
                <span className='d-none d-xl-inline text-white'>   More</span>                    
           </Link>
            <div className='d-grid mt-2'>
                <a href='tweet.html' className='btn btn-primary btn-block rounded-pill'>
                    Tweet</a>
            </div>
        </div>
    );
}
export default NavigationSidebar;
