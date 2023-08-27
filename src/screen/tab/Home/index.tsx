import React, { useEffect, useRef, useState } from 'react';
import * as S from './style'
import AppointmentList from '../../../components/appointList';
import { ActivityIndicator, Animated, Text, FlatList, ListRenderItemInfo} from 'react-native'
import { DATA } from '../../../apis/appointment/seed';
import { IAppointments } from '../../../apis/appointment/types';
import Header from '../../../components/header';

import Api from '../../../apis/appointment/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default () => {
    const [inputField, setInputField] = useState('')
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const navigation = useNavigation();

    const scrollOffsetY = useRef(new Animated.Value(0)).current;
    scrollOffsetY.addListener(changeTitle)
    
    const HeaderHeight = scrollOffsetY.interpolate({
        inputRange: [64, 94],
        outputRange:[40, 0],
        extrapolate:'clamp'
    })

    const TextPos = scrollOffsetY.interpolate({
        inputRange: [64, 94],
        outputRange:[0, -30],
        extrapolate:'clamp'
    })

    async function ListAppoints () {
        const token = await AsyncStorage.getItem('token');
        try{
            setLoading(true)
                let res = await Api.listAppoint(token, page);
                if(res) {
                   console.log('deucerto')
                   setData([...data, ...res])
                   setPage(page + 1)
                } else {
                    alert('error')
                }
            } finally{
                setLoading(false)}
    }
    useEffect(()=>{
        //ListAppoints()
    },[])
    
    function changeTitle ({value}: { value: number }){
        if (value <= 94) {
            navigation.setOptions({
                title: ''
            });
        } else {
            navigation.setOptions({
                title: 'BDVs'
            });
        }
    }

    function renderItem ({ item }:ListRenderItemInfo<IAppointments>){
        return <AppointmentList data={item} />
    }
    return (
        <S.Container>
            <Animated.View style={{
                position:'absolute',
                zIndex:99,
                overflow:'hidden',
                width:'100%',
                height:HeaderHeight,
                paddingRight:20,
                paddingLeft:20,
                backgroundColor:'#f2f3f4'
            }}  
            >
                <Animated.Text style={{
                top:TextPos,
                width:'100%',
                height:32,
                fontSize:32,
                fontWeight:'bold',
                color:'#004682',
            }}      
                >BDVs</Animated.Text>

            </Animated.View>
            <FlatList style={{width:'100%', paddingTop:40,paddingRight:20, paddingLeft:20}}
                ListHeaderComponent={ <Header/>}
                keyExtractor={item => item.id}
                data={DATA}
                renderItem={renderItem}
                //onEndReached={ListAppoints}
                //onEndReachedThreshold={0.1}
                onScroll={Animated.event([
                    {nativeEvent: {contentOffset: {y: scrollOffsetY}}}
                ], {useNativeDriver:false})}
                scrollEventThrottle={16}
            />
        </S.Container>
    );
}