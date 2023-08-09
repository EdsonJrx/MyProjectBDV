import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './styles'
import Logo from '../../../assets/Engepar.svg'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../../routes/stack.route';


export default () => {
    
    const navigation = useNavigation<StackTypes>();
    
    async function checkToken() {
        const token = await AsyncStorage.getItem('token');
    
        if(token) {
            //validar token
        } else {
            navigation.navigate('Login');
        }
    } 

    useEffect(()=>{
        checkToken()
    },[]);

    return (
        <Container>
            <Logo width="128" height="150"></Logo>
            <LoadingIcon size="large" color='#004682'></LoadingIcon>
        </Container>
    );
}