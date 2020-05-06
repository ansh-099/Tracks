import React, { useContext, useEffect } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AuthForms from '../components/AuthForms';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';


const SigninScreen = ({navigation}) =>{
   const {state, signin, ClearErrorMessage} = useContext(Context);
   useEffect(() => {
    const listener = navigation.addListener('didFocus',() => {
        console.log('with the focus');
    });
    return () => {
        listener.remove();
    }
   },[]);
   
return (
    <View style = {styles.container}>
        <NavigationEvents
      onWillFocus={() => console.log('will focus')}
      onDidFocus={() => console.log('did focus')}
      onWillBlur={() => console.log('will blur')}
      onDidBlur={() => console.log('did blur')}
    /> 
 
       <AuthForms
       headerText = 'Sign In to your account'
       errorMessage = {state.errorMessage}
       submitButtonText = 'Sign Up'
       onSubmit = {signin}
       />
       <NavLink
       routeName = 'Signup'
       text = 'Create New account? Sign In'

       />
    </View>

);
};
SigninScreen.navigationOptions= {
    headerShown: false
};

const styles = StyleSheet.create(
    {
    container : {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 10
    },
    link: {
        color: 'blue'
    }
    });
export default SigninScreen;