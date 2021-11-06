const PostSummaryItem = (
    {
        post = {
            topic: 'Web Development',
            userName: 'ReactJS',
            time: '2h',
            title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
            image: '/a5/images/reactjs.png'
        }
    }) => {
    return(
        <li className = 'list-group-item rounded-0'>
            <div className='row ms-0'>
                <div className='col-9'>
                    <p className='text-muted mt-2 mb-0'>{post.topic}</p>
                    <p className='fw-bold mt-0 mb-0'>
                    {post.userName} <i className='fas fa-check-circle'></i>
                    <span className='text-muted fw-normal'> - {post.time}</span>
                    </p>
                    <p className='fw-bold mt-0'>{post.title}</p>
                </div>
                <div className ='col-3'>
                    <img src = {post.image} className='mb-2 mt-2 pe-2 img-fluid rounded' alt=''/>
                </div>
            </div>
        </li>
    );
}
export default PostSummaryItem;