import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {THEME} from "../themes/theme";

export const Navbar = (props) => {
    return (
        <View style={styles.root}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        height: 80,
        backgroundColor: THEME.PRIMARY_COLOR,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingHorizontal: 24,
        paddingBottom: 15,
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: {width: 2, height: 2},
        elevation: 8,
    },
    title: {
        color: '#ffffff',
        fontSize: 20,
    },
});

export default Navbar;
