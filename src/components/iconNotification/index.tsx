import React, { useState } from 'react';
import * as S from './style'
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/stack.route';


export default function IconNotification(){
    const navigation = useNavigation<StackTypes>();
    const [hasNotification, setHasNotification] = useState(true)
    return(
        <S.Container onPress={() => navigation.navigate('profile')}>
            {hasNotification && <S.Note/>}
        </S.Container>
    )
}