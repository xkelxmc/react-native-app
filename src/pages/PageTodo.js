import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import TemplateDefault from "../template/TemplateDefault";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export const PageTodo = (props) => {
    const [todoList, setTodoList] = useState([]);
    const addTodo = (title) => {
        const newTodo = {
            id: Date.now().toString(),
            complete: false,
            title: title,
        };
        setTodoList(prev => [...prev, newTodo]);
    };
    const completeTodo = (todo) => {
        Alert.alert(JSON.stringify(todo));
    }
    return (
        <TemplateDefault title={'Counter App'}>
            <View style={styles.container}>
                <TodoForm addTodo={addTodo}/>
                <TodoList todos={todoList} completeTodo={completeTodo} />
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
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    checkbox: {
        alignSelf: "center",
    },
});

export default PageTodo;
