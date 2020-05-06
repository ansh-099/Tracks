import {useState, useEffect} from 'react';
import {Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack, callback) => {
    const [err,setErr] = useState('');
    const [sub, setSub] = useState(null);

    const startWatching = async() => {
        try{
            await requestPermissionsAsync();
            const subscriber = await watchPositionAsync({
                   Accuracy: Accuracy.BestForNavigation,
                   timeInterval: 1000,
                   distanceInterval: 10
        },callback);
        setSub(subscriber);
        }catch(e){
            
            setErr(e);
        }
    };

    useEffect(() => {
        if(shouldTrack){
            startWatching();
        }else{
            if(sub){
                sub.remove();
            }
            setSub(null);
           
        }
    }, [shouldTrack]);
    return [err];
};