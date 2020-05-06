import React, { useContext } from 'react';
import { Text, StyleSheet , Image, ActivityIndicator} from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';


const Map = () => {
    const {state: {currentLocation}, addLocation } = useContext(LocationContext);
    // console.log(currentLocation);
    
    if(!currentLocation){
        return <ActivityIndicator size = 'large' style ={{margin : 20}}/>;
    }

    return (<MapView 
        style = {styles.maps}
        initialRegion = {{
            ...currentLocation.coords,
            latitudeDelta:0.01,
            longitudeDelta:0.01,
        }}
        // region = {{
        //     ...currentLocation.coords,
        //     latitudeDelta:0.01,
        //     longitudeDelta:0.01,
        // }}
        >
        <Circle
        center = {currentLocation.coords}
        radius = {30}
        strokeColor = 'rgba(158,158,255,1.0)'
        fillColor = 'rgba(158,158,255,0.3)'
        />
        </MapView>
        
        );
    
};


const styles = StyleSheet.create({
    maps: {
       height: 200,
       margin:10
    }
});

export default Map;
