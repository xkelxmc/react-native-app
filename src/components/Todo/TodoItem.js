import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {THEME} from "../../themes/theme";

const TodoItem = (props) => {
    const {item, toggleTodo, removeTodo} = props;
    return (
        <View style={styles.todoItem}>
            <TouchableOpacity
                onPress={() => toggleTodo(item)}
            >
                {item.complete
                    ? <MaterialIcons name={'check-box'} size={24} color={THEME.PRIMARY_COLOR}/>
                    : <MaterialIcons name={'check-box-outline-blank'} size={24} color="#A6A6A6"/>
                }
            </TouchableOpacity>
            <Text
                style={[styles.text, item.complete ? styles.textComplete : null]}>{item.title}</Text>
            <TouchableOpacity
                onPress={() => removeTodo(item)}
            >
                <MaterialIcons name={'cancel'} size={24} color="#A6A6A6"/>
            </TouchableOpacity>
        </View>
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
    },
    text: {
        flex: 1,
        fontSize: 16,
        marginLeft: 8,
    },
    textComplete: {
        textDecorationLine: 'line-through',
        color: '#828282',
    },
})

export default TodoItem;
