import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const SignupScreen = ({navigation}) =>{
return (
    <View>
        <Button
        title= 'Press me'
        onPress={()=>{
            navigation.navigate('TrackListFlow')
        }}
        /> 
           <Text>Hey SignUp</Text>
    </View>

);
};

const styles = StyleSheet.create(
{

});

export default SignupScreen;