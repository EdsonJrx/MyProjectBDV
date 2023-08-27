import React, { useState } from 'react';
import * as S from './style'
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/stack.route';
import Feather from '@expo/vector-icons/Feather';


export default function IconNotification(){
    const navigation = useNavigation<StackTypes>();
    const [hasNotification, setHasNotification] = useState(true)
    return(
        <S.Container onPress={() => navigation.navigate('profile')}>
            <Feather name="info" size={30} color="white" />
            {hasNotification && <S.Note/>}
        </S.Container>
    )
}