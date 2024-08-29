import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const TodoItem = ({item, pressHandler}) => {
    return( 
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={Styl.item}>
                <MaterialIcons name='delete' size={15} color='#333'/>
            <Text style={Styl.textItem}> {item.text} </Text>
            </View>
        </TouchableOpacity>
    )
}

const Styl = StyleSheet.create ({
    item:{
        padding: 16,
        borderWidth: 1.5,
        borderStyle: 'dashed',
        borderColor: 'grey',
        borderRadius:10,
        marginTop: 10,
        flexDirection: 'row',
    },

    textItem: {
        marginLeft: 10,
    }
})
export default TodoItem;