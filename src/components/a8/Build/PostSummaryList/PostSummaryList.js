import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import posts from "./Posts.json"
const PostSummaryList  = () => {
    return(
        <ul className='list-group rounded-bottom'>
                {
                    posts.map(posts => {
                        return(<PostSummaryItem post = {posts}/>);
                    })
                }
        </ul>
    );
}

export default PostSummaryList ;