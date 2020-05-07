import React ,{useContext, useEffect, useState, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import { Text} from 'react-native-elements';
import { SafeAreaView , withNavigationFocus} from 'react-navigation';
import Map from '../components/Map';
import '../_mockLocation';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import {Entypo} from '@expo/vector-icons';

const TrackCreateScreen = ({isFocused}) => {
    console.log(isFocused);

    const { state, addLocation } = useContext(LocationContext);
    console.log("INSIDE",state.locations.length);

    const callback = useCallback((location) => {
        addLocation(location,state.recording);
        console.log("OUTSIDE",state.recording);
    },[state.recording]);

    const [err] = useLocation(isFocused || state.recording ,callback);

    
return (
    <SafeAreaView forceInset = {{top: 'always'}}>
        <Text style = {styles.heading} h2>Create A Track</Text>
        <Map />
        {err ? <Text>Please Enable Location Services</Text> : null}
        <TrackForm/>
    </SafeAreaView>
);
};

TrackCreateScreen.navigationOptions = {
        title:'Add Track',
        tabBarIcon: <Entypo name = 'circle-with-plus' size = {25}/>

};

const styles = StyleSheet.create(
{
    heading: {
        margin: 10
    }
});

export default withNavigationFocus(TrackCreateScreen);