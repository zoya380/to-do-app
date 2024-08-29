import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const functi = () => {
    const data= [
        'one',
        'two',
        'three',
        'four',
        'five'
    ]

    const showMap = () => {
        data.map((item) => 
            <Text style = {{fontSize: 10}}>{item}</Text>)
        }
    
return(
    <View>
        <Text>
            {showMap}
        </Text>
    </View>
)
};
export default functi;
    
