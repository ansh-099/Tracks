import React ,{useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import { Text} from 'react-native-elements';
import { SafeAreaView , withNavigationFocus} from 'react-navigation';
import Map from '../components/Map';
import '../_mockLocation';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({isFocused}) => {
    // console.log(isFocused);

    const { addLocation } = useContext(LocationContext);

    const [err] = useLocation(isFocused,addLocation);

    
return (
    <SafeAreaView forceInset = {{top: 'always'}}>
        <Text style = {styles.heading} h2>Create A Track</Text>
        <Map />
        {err ? <Text>Please Enable Location Services</Text> : null}
    </SafeAreaView>
);
};

const styles = StyleSheet.create(
{
    heading: {
        margin: 10
    }
});

export default withNavigationFocus(TrackCreateScreen);