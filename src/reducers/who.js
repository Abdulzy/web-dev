import whoJson from './data/who.json';

const who = (state = whoJson,action) => {
    switch (action.type) {
        case 'fetch-who':
            return action.who;
        default:
            return(state);
    }
};

export default who;
