import React from 'react';
import { Container, InputName, InputPass, Text } from './style';

export default function InputLogin(){
    return(
        <Container>
            <InputName 
                placeholder='Email'
                placeholderTextColor='#004682'
                keyboardType='email-address'
            />
            <InputPass 
                placeholder='Senha'
                placeholderTextColor='#004682'
                keyboardType='visible-password'
            />
        </Container>
    )
}