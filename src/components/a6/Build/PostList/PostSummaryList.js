import PostSummaryItem from "./PostItem";
import posts from "./Posts.json"
const PostSummaryList  = () => {
    return(
        <ul className='list-group'>
            <li className = 'list-group-item'>
                {
                    posts.map(posts => {
                        return(<PostSummaryItem post = {posts}/>);
                    })
                }
            </li>
        </ul>
    );
}

export default PostSummaryList ;