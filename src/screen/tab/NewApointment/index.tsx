import * as React from 'react';
import * as S from './style'
import Button from '../../../components/button'
import { useNavigation } from '@react-navigation/native';


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
            <Button texto={"Salvar"} value onClick = {handlerSave}/>
            <Button texto={"Cancelar"} onClick = {handlerCancel}/>
        </S.Container>
    );
    
}