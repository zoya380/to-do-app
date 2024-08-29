
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = () => {
    return( 
        <View style={Design.header}>
            <Text style={Design.title}>
                My todos
            </Text>
        </View>
    )
}

const Design = StyleSheet.create ({

    header: {
    paddingTop: 30,
    backgroundColor: 'coral',
    height: 80,    
},
    title:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }

})

export default Header;