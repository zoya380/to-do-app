import React, { useState } from 'react';
import {Text, View, StyleSheet, Button, TextInput} from 'react-native';

const AddTodo = ({submitHandler}) => {
   
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return(

        <View>
            <TextInput style={Stylee.input}
            placeholder='Todo here..'
            onChangeText={changeHandler}
            />

            <Button onPress={ ()=> submitHandler(text) } title = 'Add Todo' color ='orange'/>
        </View>
    )
;}

const Stylee = StyleSheet.create({
    input: {
        marginBottom: 40,
        paddingHorizontal: 30,
        paddingVertical:1,
        borderBottomWidth: 2
    
    }
})
export default AddTodo;