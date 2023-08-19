import React from 'react';
import { View} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './style';

export default function ButtonNew({size, focused}:{size:number, focused:boolean}){
    return(
        <View style={[styles.container, {backgroundColor: focused ? '#E6B300' : '#E6B300'}]}>
            <FontAwesome name="plus" size={size} color={focused ? '#fff' : '#f8f8f8'} />
        </View>
    )
}