import React from 'react';
import {ScrollView, View, Text, StyleSheet, Button} from 'react-native';

export const TodoList = (props) => {
    const {todos, completeTodo, removeTodo} = props;
    const handleCheckBoxClick = (todo) => {
        completeTodo(todo);
    }
    const handleRemoveClick = (todo) => {
        removeTodo(todo);
    }
    return (
        <ScrollView style={styles.root}>
            {todos.map(item => (
                <View key={item.id} style={styles.todoItem}>
                    <Button title={item.complete ? '+' : '-'} onPress={() => handleCheckBoxClick(item)}/>
                    <Text style={[styles.text, {textDecorationLine: item.complete ? 'line-through' : 'none'}]}>{item.title}</Text>
                    <Button title={'Удалить'} onPress={() => handleRemoveClick(item)}/>
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
    text: {
        fontSize: 20,
        marginLeft: 12,
    }
})

export default TodoList;
