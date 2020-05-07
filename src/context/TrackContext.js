import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const reducer = (state, action) => {
    switch(action.type){
        case 'fetch_data':
            return action.payload;
        default:
            return state;
    }

};

const fetchTracks = (dispatch) => {
return async() => {
    const response = await trackerApi.get('/tracks');
    dispatch({type:'fetch_data', payload: response.data});
};
}
const createTracks = (dispatch) => {
return async(name, locations) => {
        await trackerApi.post('/tracks', {name, locations} );

}
}

export const {Provider, Context } = createDataContext(
    reducer, {fetchTracks, createTracks},
    []
);