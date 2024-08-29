import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const todos = () => {


    const [redo, setRedo] = useState([
        {text: 'My Coffee',  key: '1'},
        {text: 'Buy me a Coffee', key: '2'},
        {text: 'create an app', key: '3'},

    ])





    const pressHandler = (key) => {
        setRedo((prevRedo) =>{
            console.log(prevRedo)
            const filteredRedo = prevRedo.filter(redo => redo.key != key);
            console.log('filtered redo list' + filteredRedo);

            return filteredRedo
        })

        setRedo((prevRedo) => {
            console.log('Previous redo list:', prevRedo);

            const filteredRedo = [];
            prevRedo.forEach(item => {
                if (item.key !== key) {
                    filteredRedo.push(item);
                }
            });

            console.log('Filtered redo list:', filteredRedo);
            return filteredRedo;
        });
    
        
    }
    
    return( 
        <View>
            <Button title='Press Button' onPress={
               
              () => pressHandler(1)
            
            
                
                
                } />
    
        </View>
    )
    
}



export default todos;