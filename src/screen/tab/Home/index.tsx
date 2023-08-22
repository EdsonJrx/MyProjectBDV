import React, { useEffect, useState } from 'react';
import * as S from './style'
import Search from '../../../components/search';
import AppointmentList from '../../../components/appointList';
import { FlatList, ListRenderItemInfo } from 'react-native'
import { DATA } from '../../../apis/appointment/seed';
import { IAppointments } from '../../../apis/appointment/types';

import Api from '../../../apis/appointment/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {
    const [inputField, setInputField] = useState('')
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])
    
    const handleClear = () => {
        setInputField('')
    }

    async function ListAppoints () {
        const token = await AsyncStorage.getItem('token');
        try{
            setLoading(true)
                let res = await Api.listAppoint(token);
                if(res) {
                   console.log('deucerto')
                   setData(res)
                } else {
                    alert('error')
                }
            } finally{setLoading(false)}
    }
    useEffect(()=>{
        ListAppoints()
    },[])

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
                data={data}
                renderItem={renderItem}
            />
        </S.Container>
    );
}