import React ,{useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {withNavigationFocus} from 'react-navigation';

const TrackListScreen = ({navigation, isFocused}) =>{
    // console.log(isFocused);
    // console.log('yoyo')

   

return (
    <View>
        <Button
        title= 'Press me'
        onPress={()=>{
            a = a-10;
            console.log(a)
        }}
        /> 
           <Text>Hey SignUp</Text>
    </View>

);
};

const styles = StyleSheet.create(
{

});

export default withNavigationFocus(TrackListScreen);