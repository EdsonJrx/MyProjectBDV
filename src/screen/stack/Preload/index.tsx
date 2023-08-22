import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './styles'
import Logo from '../../../assets/Engepar.svg'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../../routes/stack.route';
import Api from '../../../apis/login/Api'


export default () => {
    
    const navigation = useNavigation<StackTypes>();
    
    async function checkToken() {
        const token = await AsyncStorage.getItem('token');
        const refresh_token = await AsyncStorage.getItem('refresh_token');
        const username = await AsyncStorage.getItem('username');

        if(token) {
            let res = await Api.checkToken(token, username)
            if(res.items) {

                //save email nome ususario no contextt

                navigation.reset({
                    routes:[{name:'home'}],
                })
            } else if (res.Code){
                let res = await Api.refreshToken(refresh_token)
                if(res.access_token) {
                    await AsyncStorage.setItem('token', res.access_token);
                    await AsyncStorage.setItem('refresh_token', res.refresh_token);

                    navigation.reset({
                        routes:[{name:'home'}],
                    })
                } else{
                    navigation.navigate('login')
                }
            }
        } else {
            navigation.navigate('login');
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