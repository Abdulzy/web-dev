import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {findAllWho} from "../../services/whoService";

const selectWho = (state) => state.who;

const WhoToFollowList = () => {
    const who = useSelector(selectWho);
    const dispatch = useDispatch();
    useEffect(() => findAllWho(dispatch))
    return (
            <ul className='list-group'>
                <li className = 'list-group-item fw-bold text-white'>Who to follow</li>
                    {
                        who.map(whoIndex => {
                            return(
                                <WhoToFollowListItem who={whoIndex}/>
                            );
                        })
                    }
            </ul>
); }

export default WhoToFollowList;