import React from 'react';
import {View, StyleSheet} from 'react-native';
import Navbar from "../components/Navbar";
import {THEME} from "../themes/theme";

export const TemplateDefault = (props) => {
    const {title, children} = props;
    return (
        <View style={styles.wrapper}>
            <Navbar title={title} />
            <View style={styles.container}>
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: THEME.BACKGROUND_COLOR,
    },
});

export default TemplateDefault;
