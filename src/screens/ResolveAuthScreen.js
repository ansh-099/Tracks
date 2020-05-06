import React, {useContext} from 'react';
import { Context } from '../context/AuthContext';

const ResolveAuthScreen = () => {
    const {tryLocalSignin} = useContext(Context);
        tryLocalSignin();
    return null;
};


export default ResolveAuthScreen;