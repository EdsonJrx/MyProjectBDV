import React from 'react';
import { View} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './style';

export default function ButtonNew({size, focused}){
    return(
        <View style={[styles.container, {backgroundColor: focused ? '#3eccf5' : '#3ecc'}]}>
            <FontAwesome name="plus" size={size} color={focused ? '#fff' : '#f8f8f8'} />
        </View>
    )
}