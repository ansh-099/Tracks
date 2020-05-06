import * as locations from 'expo-location';

const tenMetersWithDegree = 0.0001;

const getLocation = (increment) => {
    return {
        timestamp : 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: -122.0312186+increment*tenMetersWithDegree ,
            latitude: 37.33233141+increment*tenMetersWithDegree

        }
    };
};

let counter = 0;
setInterval(
    () => {
        locations.EventEmitter.emit('Expo.locationChanged',{
            watchId: locations._getCurrentWatchId(),
            location: getLocation(counter)
        });
        counter++;
    },1000
);