import React, {  useContext } from 'react';
import {StyleSheet, View} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForms from '../components/AuthForms';
import NavLink from '../components/NavLink';



const SignupScreen = () =>{
    const {state, signup} = useContext(AuthContext);
   
return (
   <View style = {styles.container}>
       <AuthForms
       headerText = 'Sign Up for Tracker'
       errorMessage = {state.errorMessage}
       submitButtonText = 'Sign Up'
       onSubmit = {signup}
       />
       <NavLink
       routeName = 'Signin'
       text = 'Already have an account? Sign In'

       />
    </View>
);
};

SignupScreen.navigationOptions = {
    headerShown : false
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
export default SignupScreen;