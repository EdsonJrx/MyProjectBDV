import React from 'react';
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
import EmailIcon from '../../../assets/email.svg';
import LockIcon from '../../../assets/lock.svg';

import Ionicons from '@expo/vector-icons/Ionicons';



export default ()=> {
    const navigation = useNavigation<StackTypes>();
    
    return (
        <Container>
            <Logo width="128" height="150"/>

            <InputArea>
                <InputLogin 
                    IconSvg={EmailIcon}
                    placeholder='Digite seu E-mail'
                />
                <InputLogin 
                    IconSvg={LockIcon}
                    placeholder='Digite sua Senha'
                />

                <CustomButton>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>

            </InputArea>
        </Container>
    );
}