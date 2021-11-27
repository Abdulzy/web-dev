const URL = 'https://arcane-sands-32499.herokuapp.com/rest/who';

export const findAllWho = (dispatch) =>
    fetch(URL)
    .then(response => response.json())
    .then(who =>
        dispatch({
            type: 'fetch-who',
            who
        })
    );

export default {
    findAllWho
    };