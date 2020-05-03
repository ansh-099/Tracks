import React from 'react';
import {Text} from 'react-native-elements';
import {withNavigation } from 'react-navigation';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Spacer from './Spacer';

const NavLink = ({ navigation, text, routeName }) => {
    return (
        <TouchableOpacity onPress = {() => {navigation.navigate(routeName)} }>
            <Spacer>
            <Text style= {styles.link}>{text}</Text>
            </Spacer>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
});

export default withNavigation(NavLink);