import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const TrackListScreen = ({navigation}) =>{
return (
    <View>
        <Button
        title= 'Press me'
        onPress={()=>{
            navigation.navigate('TrackDetail')
        }}
        /> 
           <Text>Hey SignUp</Text>
    </View>

);
};

const styles = StyleSheet.create(
{

});

export default TrackListScreen;