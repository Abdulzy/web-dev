import PostSummaryItem from "./PostItem";
import posts from "./Posts.json"
const PostSummaryList  = () => {
    return(
        <ul className='list-group'>
                {
                    posts.map(posts => {
                        return(<PostSummaryItem post = {posts}/>);
                    })
                }
        </ul>
    );
}

export default PostSummaryList ;