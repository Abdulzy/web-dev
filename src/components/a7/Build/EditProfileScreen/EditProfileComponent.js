import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import '../ProfileScreen/profile.css';

const selectProfile = (state) => state.profile;

const EditProfileComponent = () => {
    const profile = useSelector(selectProfile);
    const dispatch = useDispatch();

    const [name, setName] = useState(profile.name);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);

    var curr = new Date();
    var currDate = curr.toISOString().substr(0,10);

    const handleNameChange = (event) => {
        const newName = event.target.value;
        console.log("handleNameChange");
        setName(newName);
    }
    const handleBioChange = (event) => {
        const newBio = event.target.value;
        console.log("handleBioChange");
        setBio(newBio);
    }
    const handleLocationChange = (event) => {
        const newLocation = event.target.value;
        console.log("handleLocationChange");
        setLocation(newLocation);
    }
    const handleWebsiteChange = (event) => {
        const newWebsite = event.target.value;
        console.log("handleWebsiteChange");
        setWebsite(newWebsite);
    }
    const handleDateOfBirthChange = (event) => {
        const newDateOfBirth = event.target.value;
        console.log("handleWebsiteChange");
        setDateOfBirth(newDateOfBirth);
    }
    const saveProfile = () => {
        console.log("saveProfile");
        dispatch( {
            type: 'edit-profile-name',
            newName: name,
            newBio: bio,
            newLocation: location,
            newWebsite: website,
            newDateOfBirth: dateOfBirth
        });
    }

    return(
        <>
            <div className="row">
                <div className="col-1 mt-3 ">
                    <Link to="/a7/twitter/profile">
                        <i className="fas fa-times text-white fs-5"></i>
                    </Link>
                </div>
                <div className="col-9 mt-2">
                    <span className="text-white fw-bold fs-5 ">Edit Profile</span>
                </div>
                <div className="col-2 mt-1">
                    <Link to="/a7/twitter/profile">
                        <button className="btn rounded-pill fw-bold text-black  bg-white" onClick={saveProfile}>Save</button>
                    </Link>
                </div>
            </div>
            <div className="mt-3">
                <img src={profile.bannerPicture}
                     width="100%"/>
                <img src={profile.profilePicture}
                     className="wd-picture"/>
            </div>
            <div className="border border-secondary rounded ms-2 me-2 ps-1" >
                <div>Name</div>
                <textarea className="border-0 bg-transparent text-white wd-textarea " onChange={handleNameChange} value={name}></textarea>
            </div>
            <div className="border border-secondary rounded ms-2 me-2 ps-1 mt-4">
                <div>Bio</div>
                <textarea className="border-0 bg-transparent text-white wd-textarea pb-4" onChange={handleBioChange} value={bio}></textarea>
            </div>
            <div className="border border-secondary rounded ms-2 me-2 ps-1 mt-4">
                <div>Location</div>
                <textarea className="border-0 bg-transparent text-white wd-textarea"onChange={handleLocationChange} value={location}></textarea>
            </div>
            <div className="border border-secondary rounded ms-2 me-2 ps-1 mt-4">
                <div>Website</div>
                <textarea className="border-0 bg-transparent text-white wd-textarea" onChange={handleWebsiteChange} value={website}></textarea>
            </div>
            <div className="ms-2 mt-4">
                <div >Birth Date</div>
                <input type="date" className="border-0 bg-transparent text-white" onChange={handleDateOfBirthChange} value={dateOfBirth} max={currDate}/>
            </div>
        </>
    );
}
export default EditProfileComponent;