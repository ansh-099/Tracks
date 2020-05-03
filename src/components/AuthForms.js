import React,{useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, Input} from "react-native-elements";
import Spacer from './Spacer';


const AuthForms = ({headerText, errorMessage, onSubmit, submitButtonText, }) => {

    const [email,setEmail]  = useState('');
    const [password,setPassword] = useState('');

    return (
        <>
        <Spacer val = {10}>
    <Text h3>{headerText}</Text>
        </Spacer>
        <Input
        autoCorrect={false} 
        autoCapitalize='none'
        label="Email"
        value = {email}
        onChangeText = {(email) => {setEmail(email)}}/>
        <Spacer />
        <Input label="Password"
        secureTextEntry
        value = {password}
        onChangeText = {setPassword}
        />
        {errorMessage ? <Text style = {styles.errorMessage} >{errorMessage}</Text>: null} 
        <Spacer>
        <Button title= {submitButtonText}
        onPress = {() => onSubmit({email, password})}
            />
            </Spacer>
            </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 10
    },
});

export default AuthForms;