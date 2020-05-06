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
        case 'signin':
            return {...state, token: action.payload};
        case 'clearErrorMessage':
            return {...state, errorMessage: ''};
        case 'signout':
            return {...state, token: null};
        default:
            return state;
    }
};

const tryLocalSignin = (dispatch) => {
    return async() => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            dispatch({type: 'signin', payload: token});
            navigate('TrackList');
        }else{
            navigate('Signup')
        }
    };
}


const ClearErrorMessage = (dispatch) => {
    return () => {dispatch({type: 'clearErrorMessage'})};
}

const signup = (dispatch) => {
    return async({email,password}) => {
        try{
            const response = await trackerApi.post('/signup',{email,password});
            console.log(response.data);
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', payload: response.data.token});
            navigate('TrackList');
        }catch(err){
            dispatch({type: 'add_error', payload: 'Some went wrong'});
            console.log(err.message);
        }
    };
};


const signin = (dispatch) => {
    return async({email,password}) => {
        try {
            const response = await trackerApi.post('/singin',{email,password});
            await AsyncStorage.setItem('token',response.data.token);
            navigate('TrackList');
        }catch(err) {
            dispatch({type: 'add_error', payload: 'Some went wrong'});
            console.log(err.message);
        }
    };
};

const signout = (dispatch) => {
    return async() => {
        const response = AsyncStorage.removeItem('token');
        dispatch({type: 'signout'});
        navigate('Signup');
    };
}

export const {Provider, Context } = createDataContext(
    authReducer,
    {signin, signup, signout, ClearErrorMessage,tryLocalSignin},
    {token : null, errorMessage : ''}
);