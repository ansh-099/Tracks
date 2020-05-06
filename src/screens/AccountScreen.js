import React ,{useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {Context} from '../context/AuthContext';
import {SafeAreaView} from 'react-navigation';

const AccountScreen = () =>{
    const {state, signout} = useContext(Context);
return (
    <SafeAreaView forceInset = {{top: 'always'}} >
    <Text>Account AccountScreen {state.token}</Text>
       <Button
       onPress = {() => {signout()}}
    title = 'Signout'
       />
    </SafeAreaView>
);
};

const styles = StyleSheet.create(
{

});

export default AccountScreen;