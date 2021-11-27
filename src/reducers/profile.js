import profileJson from './data/profile.json';

const profile = (state = profileJson, action) => {
    switch (action.type) {
        case 'fetch-profile':
            return action.profile;

        case 'edit-profile-name':
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