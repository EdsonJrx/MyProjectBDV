import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../../routes/stack.route';
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText
 } from './styles';

import InputLogin from '../../../components/InputLogin';
import Logo from '../../../assets/Engepar.svg'

import LoginApi from '../../../apis/LoginApi';

export default ()=> {
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleLoginClick = async () => {
        if(emailField != "" && passwordField != ""){
            let res = await LoginApi.login(emailField, passwordField);
            console.log(res)
            if(res.access_token) {
                alert('Deu certo!')
            } else {
                alert('E-mail e/ou senha errados!')
            }
        } else {
            alert('Preencha todos os campos');
        }
        
    }
    
    const navigation = useNavigation<StackTypes>();
    
    return (
        <Container>
            <Logo width="128" height="150"/>

            <InputArea>
                <InputLogin
                    icon='email'
                    placeholder='Digite seu E-mail'
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                    password={false}
                />
                <InputLogin 
                    icon='lock'
                    secondIcon='eye'
                    placeholder='Digite sua Senha'
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handleLoginClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>

            </InputArea>
        </Container>
    );
}