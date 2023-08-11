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

import Api from '../../../apis/login/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ()=> {
    const [emailField, setEmailField] = useState<string>('');
    const [passwordField, setPasswordField] = useState<string>('');

    async function handleLoginClick () {
        if(emailField != "" && passwordField != ""){
            let res = await Api.login(emailField, passwordField);
            if(res.access_token) {
                await AsyncStorage.setItem('token', res.access_token);
                await AsyncStorage.setItem('refresh_token', res.refresh_token);
                await AsyncStorage.setItem('username', emailField);
                
                //save email nome ususario no context

                navigation.reset({
                    routes:[{name:'Home'}],
                })
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
                    
                />
                <InputLogin 
                    icon='lock'
                    placeholder='Digite sua Senha'
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    
                />

                <CustomButton onPress={handleLoginClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>

            </InputArea>
        </Container>
    );
}