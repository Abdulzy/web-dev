import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";
const selectWho = (state) => state.who;

const WhoToFollowList = () => {
    const who = useSelector(selectWho);
    return (
            <ul className='list-group'>
                <li className = 'list-group-item fw-bold text-white'>Who to follow</li>
                    {
                        who.map(who => {
                            return(<WhoToFollowListItem who = {who}/>);
                        })
                    }
            </ul>
); }

export default WhoToFollowList;