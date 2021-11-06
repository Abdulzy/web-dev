import profileJson from './data/profile.json';

const profile = (state = profileJson, action) => {
    switch (action.type) {
        case 'edit-profile-name':
            console.log("STATE NAME: " + state.name);
            console.log("ACTION NAME: " + action.newName);
            return {
                ...state,
                name: action.newName,
                bio: action.newBio,
                location: action.newLocation,
                website: action.newWebsite,
                dateOfBirth: action.newDateOfBirth
            }
        default:
            return state;
    }
};

export default profile;