import React from 'react';
import {View, Button, StyleSheet, TextInput} from 'react-native';

export const TodoForm = (props) => {
    const addTodo = () => {
        props.addTodo('test');
    }
    return (
        <View style={styles.root}>
            <TextInput style={styles.input}/>
            <Button title={'Добавить'} onPress={addTodo}/>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        width: '70%',
        backgroundColor: 'rgba(0, 0, 0, 0.06)',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderBottomColor: '#cccccc',
        borderRadius: 4,
        height: 55,
        paddingHorizontal: 16,
    }
});

export default TodoForm;
