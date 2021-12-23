import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');
    const [num, setNum] = useState(1)

   
        
    const changeHandler = (val) => {
      if (text.length <= 10) { 
            setNum(num + 1)
            setText(val)      
        }
        else {
            alert('max: 10 texts added')     
        }
    }

    return (
        <View>
            <TextInput style={styles.input}
                placeholder='new todo..'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='add todo' text='add todo' color='pink' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: 'pink'
    }
})