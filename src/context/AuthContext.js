import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import {AsyncStorage} from 'react-native';
import { navigate } from "../navigationRef";


const authReducer = (state, action) => {
    switch(action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signup':
            return {...state, token: action.payload};
        default:
            return state;
    }
};
const signup = (dispatch) => {
    return async({email,password}) => {
        try{
            const response = await trackerApi.post('/signup',{email,password})
            console.log(response.data);
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signup', payload: response.data.token});
            navigate('TrackList')
        }catch(err){
            dispatch({type: 'add_error', payload: 'Some went wrong'});
            console.log(err.message);
        }
    };
};


const signin = (dispatch) => {
    return ({email,password}) => {

    };
};

const signout = () => {
    return () => {

    };
}

export const {Provider, Context } = createDataContext(
    authReducer,
    {signin, signup, signout},
    {token : null, errorMessage : ''}
);