import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList, Alert, Keyboard, TouchableWithoutFeedback, } from 'react-native';
import Header from './Components/header';
import TodoItem from './Components/TodoItem';
import AddTodo from './Components/AddTodo';
import SandBox from './Components/sandbox';





const Todo = () => {
    const [todos, setTodos] = useState([
       {text: 'Buy Coffee', key: '1' },
       {text: 'create an app', key: '2'},
       {text: 'play on the switch', key: '3'},

    ]);

    const pressHandler = (key) => {
        
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key)

            })
    
    }

    const submitHandler = (text) => {

        if (text.length > 3){
        setTodos((prevTodos) => {
            return[

                {text:text, key: Math.random().toString()},
                ...prevTodos
            ];

        });
    }
        else{
            Alert.alert('OOPS', 'Todo must be over 3 characters', 
                [
                {text:'Understood', onPress: () => console.log('alert closed')}
                ]
            );
        }
    }
    return(
        
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard');
        }}>
        <View style={Styling.container}>
            <Header/>

            <View style={Styling.content}>
            
            <AddTodo submitHandler={submitHandler}/>

                <View  style={Styling.list}>
                
                    <FlatList

                    data={todos}
                    renderItem = {({item}) =>(
                        <TodoItem item = {item} pressHandler = {pressHandler}/>
                    )}
                    />
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>

    )
}

const Styling = StyleSheet.create({
    container:{
    flex: 1,
    },

    content: {
       
        padding:80,
        flex:1,
    },

    list: {
        marginTop:20,
        flex:1,
    }
})

export default Todo;