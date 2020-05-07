import React, { useContext } from 'react';
import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';
const TrackForm = () => {
    const {state, startRecording, stopRecording, changeName} = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();
    return (<>
    <Spacer>
    <Input 
    value = {state.name}
    onChangeText = {changeName}
    placeholder= 'Enter Name'/>
    </Spacer>
    <Spacer>
        {state.recording ? <Button onPress = {stopRecording} title = 'Stop Recording'/> 
        : <Button onPress = {startRecording} title = 'Start Recording'/>}
  </Spacer>

        <Spacer>
        {!state.recording && state.locations.length ? <Button onPress = {saveTrack} title= 'Save Recording' /> : null}
        </Spacer>
  
    
    </>

    );

};

export default TrackForm;