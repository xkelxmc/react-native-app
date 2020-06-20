import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TemplateDefault from "../template/TemplateDefault";
import Counter from "../components/Counter/Counter";

export const PageCounter = (props) => {
    const [countValue, setCountValue] = useState(0);
    const handleSave = (value) => {
        setCountValue(value);
    }
    return (
        <TemplateDefault title={'Counter App'}>
            <View style={styles.container}>
                <Text style={styles.text}>Счётчик: {countValue}</Text>
                <Counter initialState={0} counterIter={10} minValue={0} maxValue={50} handleSave={handleSave}/>
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
    }
});

export default PageCounter;
