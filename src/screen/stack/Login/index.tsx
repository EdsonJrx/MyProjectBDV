import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../../routes/stack.route';
import * as S from './styles';

import InputLogin from '../../../components/InputLogin';
import Logo from '../../../assets/Engepar.svg'

import Api from '../../../apis/login/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ()=> {
    const [emailField, setEmailField] = useState<string>('');
    const [passwordField, setPasswordField] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation<StackTypes>();

    async function handleLoginClick () {
        try{
            setLoading(true)
            if(emailField != "" && passwordField != ""){
                let res = await Api.login(emailField, passwordField);
                if(res.access_token) {
                    await AsyncStorage.setItem('token', res.access_token);
                    await AsyncStorage.setItem('refresh_token', res.refresh_token);
                    await AsyncStorage.setItem('username', emailField);
                    
                    //save email nome ususario no context
                    
                    navigation.reset({
                        routes:[{name:'home'}],
                    })
                } else {
                    alert('Usuario e/ou senha errados!')
                }
            } else {
                alert('Preencha todos os campos');
            }
        } finally{setLoading(false)}
    }
    
    return (
        <S.Container>
            <Logo width="128" height="150"/>

            <S.InputArea>
                <InputLogin
                    icon='email'
                    placeholder='Digite seu Usuário'
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                    password={false}
                />
                <InputLogin 
                    icon='lock'
                    placeholder='Digite sua Senha'
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <S.CustomButton disabled={loading} onPress={handleLoginClick} >
                {loading? <S.LoadingIcon  size="small" color='#fff'/> : <S.CustomButtonText>LOGIN</S.CustomButtonText>}
                </S.CustomButton>

            </S.InputArea>
        </S.Container>
    );
}