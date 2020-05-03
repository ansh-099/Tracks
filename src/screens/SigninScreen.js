import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';


const SigninScreen = ({navigation}) =>{
    const navi = navigation.getParam('navi');
return (
    <View> 
          <TouchableOpacity onPress = {() => {navi.navigate('TrackList')}}>
<Text>sshcddfscdbhcsss</Text>
        </TouchableOpacity>
    </View>

);
};

const styles = StyleSheet.create(
{

});

export default SigninScreen;