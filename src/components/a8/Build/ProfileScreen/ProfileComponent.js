import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import './profile.css';
import {fetchProfile} from "../../../../services/profileService";


const selectProfile = (state) => state.profile;

const ProfileComponent = () => {
    const profile = useSelector(selectProfile);
    const dispatch = useDispatch();
    useEffect(() => fetchProfile(dispatch))
    return(
        <>
            <div className="row">
                <div className="col-1">
                    <i className="fas fa-arrow-left text-white fw-bold ps-3 pt-3"></i>
                </div>
                <div className="col-11">
                    <div className="text-white fw-bold">{profile.name}</div>
                    <div>5196 tweets</div>
                </div>
            </div>
            <div>
                <img src={profile.bannerPicture}
                    width="100%" alt=''/>
                <img src={profile.profilePicture}
                     className="wd-picture" alt =''/>
                <Link to="/a8/twitter/editprofile">
                    <button className="btn rounded-pill wd-edit">Edit Profile</button>
                </Link>
            </div>
            <div className="ps-3">
                <div className="text-white fw-bold">{profile.name}</div>
                <div className="pb-3">@{profile.handle}</div>

                <div className="text-white ">{profile.bio}</div>

                <div className="border-0 pt-2">
                    <span className="pe-3"> <i className ="fas fa-map-marker-alt"></i> {profile.location}</span>
                    <span className="pe-3"> <i className ="fas fa-birthday-cake"></i>  Born {profile.dateOfBirth}</span>
                    <span> <i className ="fas fa-calendar-alt"></i>  joined {profile.dateJoined}</span>
                </div>
                <div className="border-0 pt-2">
                    <span className="pe-3"><span className="text-white fw-bold"> {profile.followingCount}</span> Following</span>
                    <span className="pe-3"><span className="text-white fw-bold"> {profile.followersCount}</span> Followers</span>
                </div>
            </div>
        </>
    );
}
export default ProfileComponent;