import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './style';

export default function IconProfile({navigation}){
    return(
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('profile')}>
        </TouchableOpacity>
    )
}