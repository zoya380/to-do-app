import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const TodoItem = ({item}) => {
    return( 
        <TouchableOpacity >
            <Text style={Styl.item}>
                {item.text}
            </Text>
        </TouchableOpacity>
    )
}

const Styl = StyleSheet.create ({
    item:{
        padding: 16,
        borderWidth: 3,
        borderStyle: 'dotted',
        borderColor: 'grey',
        borderRadius:10,
        marginTop: 10,
        
    }
})
export default TodoItem;