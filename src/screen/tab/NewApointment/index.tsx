import React, { useState } from 'react';
import * as S from './style'
import Button from '../../../components/button'
import IconDesc from '../../../components/iconDesc';
import { IconDescProps } from './types';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../../routes/stack.route';


export default ({icon}:IconDescProps) => {
    const navigation = useNavigation<StackTypes>();

    const handleCamera = () => {
        navigation.navigate('camera')
    }

    const handlerSave = () => {
        navigation.goBack();
    };
    const handlerCancel = () => {
        navigation.goBack();
    };

    return (
        <S.Container>
            <IconDesc icon={'account-circle'} texto={'Edson.junior'} />
            <IconDesc icon={'tanker-truck'} texto={'CP-01'} />
            <IconDesc icon={'office-building-marker'} texto={'Caarapó e Fátima do Sul/MS - AGESUL - Lote 02'}/>
            <S.AreaImage>
                <S.Image source={ require('../../../assets/image.png') }/>
                <S.ButtonIcon onPress={handleCamera}>
                    <S.Icon name={'camera'} size={28}/>
                </S.ButtonIcon>
            </S.AreaImage>
            <S.AreaButton>
                <Button texto={"Salvar"} value onClick = {handlerSave}/>
                <Button texto={"Cancelar"} onClick = {handlerCancel}/>
            </S.AreaButton>
        </S.Container>
    );
    
}