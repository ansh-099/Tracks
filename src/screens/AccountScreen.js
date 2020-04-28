import React from 'react';
import {StyleSheet, View, Text,Button} from 'react-native';

const AccountScreen = ({navigation}) =>{
return(
    <View>
        <Button
        title= 'Press me'
        onPress={()=>{
            navigation.navigate('TrackCreate')
        }}
        /> 
           <Text>Hey SignUp</Text>
    </View>

);
};

const styles = StyleSheet.create(
{

});

export default AccountScreen;