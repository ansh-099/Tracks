import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const TrackDetailScreen = () =>{
return (
    <View> 
           <Text>Hey Track Details</Text>
    </View>

);
};


const styles = StyleSheet.create(
{

});

TrackDetailScreen.navigationOptions = ({navigation}) => {
    return {
        title: 'MyScreen',
        headerLeft: null
    };
};

export default TrackDetailScreen;