import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export const TodoList = (props) => {
    const {todos, completeTodo} = props;
    const handleCheckBoxClick = (todo) => {
        completeTodo(todo);
    }
    return (
        <ScrollView style={styles.root}>
            {todos.map(item => (
                <View key={item.id} style={styles.todoItem}>
                    <CheckBox
                        disabled={false}
                        value={item.complete}
                        onValueChange={() => handleCheckBoxClick(item)}
                    />
                    <Text>{item.title}</Text>
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        marginTop: 12,
    },
    todoItem: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: '#cccccc',
        marginVertical: 4,
        padding: 16,
        borderRadius: 4,
    },
})

export default TodoList;
