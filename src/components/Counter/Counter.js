import React, { useState } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {THEME} from "../../themes/theme";

export const Counter = (props) => {
    const {initialState, counterIter, minValue, maxValue, handleSave} = props;
    const [count, setCount] = useState(initialState);
    const upCount = () => {
        if(count + counterIter <= maxValue) {
            setCount(count + counterIter);
        } else {
            setCount(maxValue);
        }
    };
    const downCount = () => {
        if(count - counterIter >= minValue) {
            setCount(count - counterIter);
        } else {
            setCount(minValue);
        }
    };
    const resetCount = () => {
        setCount(initialState);
    };
    const saveCount = () => {
        handleSave(count);
    };
    return (
        <View style={styles.root}>
            <View style={styles.counterContainer}>
                <View style={styles.buttonContainer}>
                    <Button title={'+'} onPress={upCount} color={THEME.PRIMARY_COLOR} />
                </View>
                <Text style={styles.text}>{count}</Text>
                <View style={styles.buttonContainer}>
                    <Button title={'-'} onPress={downCount} color={THEME.PRIMARY_COLOR} />
                </View>
            </View>
            <View style={styles.buttonReset}>
                <Button title={'сбросить'} onPress={resetCount} color={THEME.PRIMARY_COLOR} />
            </View>
            <View style={styles.buttonReset}>
                <Button title={'сохранить'} onPress={saveCount} color={THEME.PRIMARY_COLOR} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        marginTop: 16,
        width: '100%',
        paddingHorizontal: 16,
    },
    counterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
    buttonContainer: {
        width: 100,
    },
    buttonReset: {
        marginTop: 16,
    },
});

export default Counter;
