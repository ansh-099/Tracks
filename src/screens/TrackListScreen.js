import React ,{useEffect, useState, useContext} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {withNavigationFocus, NavigationEvents} from 'react-navigation';
import {Context as TrackContext} from '../context/TrackContext';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements';
import Spacer from '../components/Spacer';
const TrackListScreen = ({navigation, isFocused}) =>{
    // console.log(isFocused);
    // console.log('yoyo')
  
    const {state, fetchTracks} = useContext(TrackContext);
    console.log("Tracks", state);
    console.log("GETTYPE", typeof(state));
return (
    <View>
        <NavigationEvents 
        onWillFocus = {() => {
            fetchTracks();
        }} />
        <Spacer>
        <FlatList 
        data = {state}
        keyExtractor = {(item) => {
             return item._id}}
            renderItem = {({item}) => {
                return (<TouchableOpacity>
                    <ListItem chevron title = {item.name}/>
                </TouchableOpacity>)
            }}
        />
        </Spacer>
    
    </View>

);
};

TrackListScreen.navigationOptions = {
    title:'My Tracks'

};


const styles = StyleSheet.create(
{

});

export default withNavigationFocus(TrackListScreen);