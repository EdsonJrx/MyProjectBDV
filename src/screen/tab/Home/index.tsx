import React, { useState } from 'react';
import * as S from './style'
import Search from '../../../components/search';
import AppointmentList from '../../../components/appointList';
import { FlatList, ListRenderItemInfo } from 'react-native'
import { DATA } from '../../../apis/appointment/seed';
import { IAppointments } from '../../../apis/appointment/types';

export default () => {
    const [inputField, setInputField] = useState('')
    
    const handleClear = () => {
        setInputField('')
    }

    function renderItem ({ item }:ListRenderItemInfo<IAppointments>){
        return <AppointmentList data={item} />
    }
    return (
        <S.Container>
            <Search 
                placeholder='Buscar'
                onChangeText={t=>setInputField(t)}
                value={inputField}
                handleClear={handleClear}
            />
            <FlatList style={{width:'100%', paddingRight:5, paddingLeft:5}}
                keyExtractor={item => item.id}
                data={DATA}
                renderItem={renderItem}
            />
        </S.Container>
    );
}