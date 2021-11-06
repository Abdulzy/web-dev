const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../../images/Nasa.png',
            userName: 'NASA',
            handle: 'NASA'
        }
    
    }) => {
    return(
        <li className = 'list-group-item'>
            <div className = 'row'>
                <div className = 'col-2 col-xl-3'>
                    <img src = {who.avatarIcon} width="48" className='rounded-circle float-start' alt='' />
                </div>
                <div className = 'col-6'>
                    <span className = "fw-bold">{who.userName}</span> <i className='fas fa-check-circle'></i>
                    <div>@{who.handle}</div> 
                </div>
                <div className = 'col-3'>
                    <button className ='btn btn-primary rounded-pill '> Follow</button>
                </div>
            </div> 
        </li>
    );
}
export default WhoToFollowListItem;
