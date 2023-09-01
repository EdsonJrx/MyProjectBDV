import * as React from 'react';
import * as S from './style'
import Button from '../../../components/button'
import { useNavigation } from '@react-navigation/native';
import IconDesc from '../../../components/iconDesc';


export default () => {
    const navigation = useNavigation();

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
            <S.AreaButton>
                <Button texto={"Salvar"} value onClick = {handlerSave}/>
                <Button texto={"Cancelar"} onClick = {handlerCancel}/>
            </S.AreaButton>
        </S.Container>
    );
    
}