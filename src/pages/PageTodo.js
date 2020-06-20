import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert, Image, Text} from 'react-native';
import TemplateDefault from "../template/TemplateDefault";
import TodoForm from "../components/Todo/TodoForm";
import TodoItem from "../components/Todo/TodoItem";
import TouchableTodoItem from "../components/Todo/TouchableTodoItem";

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
    const toggleTodo = (todo) => {
        setTodoList(prev => prev.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item,
                    complete: !item.complete,
                }
            }
            return item;
        }));
    }
    const removeTodo = (todo) => {
        setTodoList(prev => prev.filter(item => item.id !== todo.id));
    }
    const handleRemoveTodo = (todo) => {
        Alert.alert(
            "Удаление задачи",
            `Вы уверены, что хотите удалить задачу "${todo.title}"?`,
            [
                {
                    text: "Отменить",
                    style: "cancel"
                },
                {
                    text: "Удалить",
                    onPress: () => removeTodo(todo),
                    style: 'destructive',
                }
            ],
            {cancelable: true}
        );
    }
    return (
        <TemplateDefault title={'Todo App'}>
            <View style={styles.container}>
                <TodoForm addTodo={addTodo}/>
                {todoList.length ? (
                    <FlatList
                        style={styles.todoList}
                        data={todoList}
                        renderItem={({item}) => (
                            <TouchableTodoItem item={item} toggleTodo={toggleTodo} removeTodo={handleRemoveTodo}/>
                        )}
                        keyExtractor={item => item.id}
                    />
                ) : (
                    <View style={styles.emptyList}>
                        <Image source={require('../../assets/no-items.png')} style={styles.image} resizeMode={'contain'}/>
                    </View>
                )}
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
        paddingVertical: 16,
    },
    checkbox: {
        alignSelf: "center",
    },
    todoList: {
        width: '100%',
        marginTop: 8,
    },
    emptyList: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        paddingTop: 26,
    },
    image: {
        width: '100%',
        height: '100%',
    }
});

export default PageTodo;
