import React, { useState, useEffect } from 'react';
import * as S from './style'
import { Camera, CameraType } from 'expo-camera';
import { Text } from 'react-native'
import MaskComponent from '../../../components/mask';
import IconTakePicture from '../../../assets/take-picture.svg'
import { TakePicProp } from './types';

export default ({size}:TakePicProp) => {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    useEffect(()=>{
        requestPermission();
    }, []);

    if (!permission){
        return <S.Container/>
    }

    if (!permission.granted){
        return (
            <S.Container>
                <Text> Acesso Negado </Text>
            </S.Container>
        )
    }

    return(
      <S.Container>
        <MaskComponent />
        <Camera style={{flex:1}} type={type} />
        <S.TakePicture size = {50}>
          <IconTakePicture width={size} height={size}/>
        </S.TakePicture>
        <S.Voltar >
          <S.Icon name={'keyboard-backspace'} size={38} />
        </S.Voltar>
      </S.Container>

    )
}