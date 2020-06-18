import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TemplateDefault from "../template/TemplateDefault";
import TodoForm from "../components/TodoForm";

export const PageTodo = (props) => {
    const [todoList, setTodoList] = useState([]);
    const addTodo = (title) => {
        const newTodo = {
            id: Date.now().toString(),
            title: title,
        };
        // setTodoList([...todoList, newTodo]);
        // setTodoList((prevTodoList) => {
        //     return [
        //         ...prevTodoList,
        //         newTodo,
        //     ];
        // })
        setTodoList(prev => [...prev, newTodo]);
    };
    return (
        <TemplateDefault title={'Counter App'}>
            <View style={styles.container}>
                <TodoForm addTodo={addTodo}/>
                {todoList.map(item => (
                    <Text key={item.id}>{item.title}</Text>
                ))}
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
    }
});

export default PageTodo;
