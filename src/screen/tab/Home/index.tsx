import React, { useState } from 'react';
import * as S from './style'
import Search from '../../../components/search';
import AppointmentList from '../../../components/appointList';

export default () => {
    const [inputField, setInputField] = useState('')
    
    const handleClear = () => {
        setInputField('')
    }
    return (
        <S.Container>
            <Search 
                placeholder='Buscar'
                onChangeText={t=>setInputField(t)}
                value={inputField}
                handleClear={handleClear}
            />
            <AppointmentList/>
        </S.Container>
    );
}