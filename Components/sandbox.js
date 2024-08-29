import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SandBox = () => {
    return(
    <View style={myStyles.container}>
        <Text style={myStyles.oneBox}>One</Text>
        <Text style={myStyles.twoBox}>Two</Text>
        <Text style={myStyles.threeBox}>Three</Text>
        <Text style={myStyles.fourBox}>Four</Text>
       
    </View>
    )
};

const myStyles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
        paddingTop: 40,
        
        alignItems: 'center',
    },

    oneBox: {
        backgroundColor: 'grey',
        padding:10,
    },
    twoBox:{
        backgroundColor: 'orange',
        padding:10,
    },
    threeBox:{
        backgroundColor: 'violet',
        padding:10,
    },
    fourBox: {
        backgroundColor: 'pink',
        padding:10,
    }
})


export default SandBox;
