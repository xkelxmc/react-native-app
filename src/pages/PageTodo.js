import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TemplateDefault from "../template/TemplateDefault";

export const PageTodo = (props) => {
    return (
        <TemplateDefault title={'Counter App'}>
            <View style={styles.container}>
                <Text style={styles.text}>Todo</Text>
            </View>
        </TemplateDefault>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#000',
        fontSize: 26,
    },
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
});

export default PageTodo;
