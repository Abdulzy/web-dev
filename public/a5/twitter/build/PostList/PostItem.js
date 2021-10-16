const PostItem = (post) => {
    return(`
        <li class = "list-group-item">
            <div class="row ms-2">
                <div class="col-1">
                    <div>
                        <img src = "${post.profile}" class= " wd-image-circular" >
                    </div>
                </div>
                <div class=" ms-1 col-10 ">
                    <div class=" fw-bold mt-0 mb-0">
                    ${post.userName} <i class="fas fa-check-circle"></i>
                    <span class="text-muted mb-0">@${post.handle}</span>
                    <span class="text-muted fw-normal"> &middot ${post.time}</span>
                    </div>
                    <p class=" mt-0">${post.title}</p>
                    <div class= " border border-secondary rounded-top">
                        <img src = "${post.image}" class= "img-fluid border border-secondary rounded-top" >
                    </div>
                    <div class= " border  border-secondary rounded-bottom">
                        <p class= " mt-2">
                            ${post.heading}
                        </p>
                        <p class = "text-muted " >
                            ${post.content}
                        </p>
                        <div class = " text-muted " >
                            ${post.link}
                        </div>
                    </div>
                    <div>
                    <span class ="me-5"><a  class = "second" href="#"><span><i class="fa-regular fa-comment"></i></span><span class ="ms-2">${post.comments}</span></a></span>
                    <span class ="me-5 ms-4"><a  class = "second" href="#"><i class="fa-solid fa-retweet"></i><span class ="ms-2">${post.retweet}</span></a></span>
                    <span class ="me-5 ms-4"><a  class = "second" href="#"><i class="fa-regular fa-heart"></i><span class ="ms-2">${post.likes}</span></a></span>
                    <span class ="me-5 ms-4"><a  class = "second" href="#"><i class="fa-solid fa-arrow-up-from-bracket"></i></a></span>
                    </div>
                </div>
            </div>
        </li>
    `);
}
export default PostItem;