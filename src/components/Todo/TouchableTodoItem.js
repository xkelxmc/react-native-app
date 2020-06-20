import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TouchableTodoItem = (props) => {
    const {item, toggleTodo, removeTodo} = props;
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => toggleTodo(item)}
            onLongPress={() => removeTodo(item)}
        >
            <View style={styles.todoItem}>
                <Text style={[styles.text, item.complete ? styles.textComplete : null]}>
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todoItem: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD',
        height: 48,
        paddingHorizontal: 8,
    },
    text: {
        flex: 1,
        fontSize: 16,
    },
    textComplete: {
        textDecorationLine: 'line-through',
        color: '#828282',
    },
})

export default TouchableTodoItem;
