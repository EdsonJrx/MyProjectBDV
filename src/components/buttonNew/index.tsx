import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import * as S from './style';

export default function ButtonNew({size}:{size:number}){
    return(
        <S.Container>
            <FontAwesome name="plus" size={size} color={'#fff'} />
        </S.Container>
    )
}