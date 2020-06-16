import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
        backgroundColor: '#2F80ED',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingHorizontal: 24,
        paddingBottom: 15,
    },
    title: {
        color: '#ffffff',
        fontSize: 20,
    },
});

export default Navbar;
