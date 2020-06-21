import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {THEME} from "../../themes/theme";

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
        minHeight: 48,
        padding: 8,
    },
    text: {
        flex: 1,
        fontSize: 16,
        color: THEME.TEXT_COLOR,
    },
    textComplete: {
        textDecorationLine: 'line-through',
        color: THEME.TEXT_GRAY_COLOR,
    },
})

export default TouchableTodoItem;
