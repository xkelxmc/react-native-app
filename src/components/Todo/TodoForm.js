import React, {useState} from 'react';
import {View, Button, StyleSheet, TextInput, Alert} from 'react-native';
import {THEME} from "../../themes/theme";

export const TodoForm = (props) => {
    const [value, setValue] = useState('')
    const addTodo = () => {
        if (value.trim()) {
            props.addTodo(value);
            setValue('');
        } else {
            Alert.alert('Ошибка', 'Невозможно добавить пустую задачу');
        }
    }
    return (
        <View style={styles.root}>
            <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder={'Todo'}/>
            <Button title={'Добавить'} onPress={addTodo} color={THEME.PRIMARY_COLOR}/>
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
        height: 38,
        paddingHorizontal: 12,
    },
});

export default TodoForm;
