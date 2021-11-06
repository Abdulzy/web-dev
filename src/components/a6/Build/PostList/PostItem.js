const PostItem = (
    {
        post = {
            handle: "elonmusk", "userName": "Elon Musk",
            time: "23h", 
            title: "Amazing show about <a class=\"wd-text-link-inspiration4x href=https://twitter.com/inspiration4x\">@Inspiration4x</a>mission", 
            image: "/a5/images/countdown.png", 
            profile: "/a5/images/spaceship.png", 
            heading: "Countdown: Inspirational4 Mission to Space | Netflix Official Site", 
            content: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space..",
            link: "<i class='fas fa-solid fa-link'></i>netflix.com",
            comments: "4.2k", 
            retweet: "3.5k", 
            likes: "37.5k",
        }
    
    }) => {
    if(post.heading || post.content || post.link){
        return(
            <li className = 'list-group-item'>
                <div className='row'>
                    <div className='col-1 ps-1 '>
                        <div>
                            <img src ={post.profile} className= 'wd-image-circular' alt='' />
                        </div>
                    </div>
                    <div className='col-11'>
                        <div className='fw-bold mt-0 mb-0'>
                        {post.userName} <i className='fas fa-check-circle'></i>
                        <span className='text-muted mb-0'>@{post.handle}</span>
                        <span className='text-muted fw-normal'> &middot; {post.time}</span>
                        <span className='float-end text-secondary'>
                            &#8226;&#8226;&#8226;
                        </span>
                        </div>
                        <p className='mt-0'><div dangerouslySetInnerHTML={{ __html: post.title }} /></p>
                        <div className= 'border border-secondary rounded-top'>
                            <img src = {post.image} className= 'img-fluid border border-secondary rounded-top' alt = '' />
                        </div>
                        <div className= 'border  border-secondary rounded-bottom'>
                            <p className= 'ms-2 mt-2'>
                                {post.heading}
                            </p>
                            <p className = 'ms-2 text-muted' >
                                {post.content}
                            </p>
                            <div className = 'ms-2 text-muted' >
                                <i class='fas fa-solid fa-link'></i>{post.link}
                            </div>
                        </div>
                        <div className= 'mt-2'>
                            <span className ='me-5'><a  className = 'second' href="#"><i className='far fa-regular fa-comment'></i><span className ='ms-2'>{post.comments}</span></a></span>
                            <span className ='me-5 ms-4'><a  className = 'second' href="#"><i className='fas fa-solid fa-retweet'></i><span className ='ms-2'>{post.retweet}</span></a></span>
                            <span className ='me-5 ms-4'><a  className = 'first' href="#"><i className='far fa-regular fa-heart'></i><span className ='ms-2'>{post.likes}</span></a></span>
                            <span className ='me-5 ms-4'><a  className = 'second' href="#"><i className='fas fa-share-square'></i></a></span>
                        </div>
                    </div>
                </div>
            </li>
        );
    } else {
        return(
            <li className = 'list-group-item'>
                <div className='row'>
                    <div className='col-1 ps-1 '>
                        <div>
                            <img src = {post.profile} className= 'wd-image-circular' alt ='' />
                        </div>
                    </div>
                    <div className='col-11'>
                        <div className='fw-bold mt-0 mb-0'>
                        {post.userName} <i className='fas fa-check-circle'></i>
                        <span className='text-muted mb-0'>@{post.handle}</span>
                        <span className='text-muted fw-normal'> &middot; {post.time}</span>
                        <span className='float-end text-secondary'>
                            &#8226;&#8226;&#8226;
                        </span>
                        </div>
                        <p className='mt-0'><div dangerouslySetInnerHTML={{ __html: post.title }} /></p>
                        <div className= 'border border-secondary rounded-top'>
                            <img src = {post.image} className= 'img-fluid border border-secondary rounded-top' alt ='' />
                        </div>
                        <div className= 'mt-2'>
                            <span className ='me-5'><a  className = 'second' href="#"><i className='far fa-regular fa-comment'></i><span className ='ms-2'>{post.comments}</span></a></span>
                            <span className ='me-5 ms-4'><a  className = 'second' href="#"><i className='fas fa-solid fa-retweet'></i><span className ='ms-2'>{post.retweet}</span></a></span>
                            <span className ='me-5 ms-4'><a  className = 'first' href="#"><i className='far fa-regular fa-heart'></i><span className ='ms-2'>{post.likes}</span></a></span>
                            <span className ='me-5 ms-4'><a  className = 'second' href="#"><i className='fas fa-share-square'></i></a></span>
                        </div>
                    </div>
                </div>
            </li>
    );

    }
}
export default PostItem;