import React, { useState, useEffect } from 'react';
import * as S from './style'
import { Camera, CameraType } from 'expo-camera';
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import Svg, { Rect } from 'react-native-svg';

const { width, height } = Dimensions.get('window');
const MASK_HEIGHT = height;
const MASK_WIDTH = width;
const RECTANGLE_WIDTH = width * 0.6; // Ajuste a largura da área retangular visível
const RECTANGLE_HEIGHT = RECTANGLE_WIDTH; // Mantenha a proporção 1:1

export default () => {
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
        <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <Svg height={MASK_HEIGHT} width={MASK_WIDTH}>
          <Rect
            x={(MASK_WIDTH - RECTANGLE_WIDTH) / 2}
            y={(MASK_HEIGHT - RECTANGLE_HEIGHT) / 2}
            width={RECTANGLE_WIDTH}
            height={RECTANGLE_HEIGHT}
            fill="rgba(0,0,0,0.5)" // Cor escura com 50% de opacidade
          />
        </Svg>
      </Camera>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black', // Cor de fundo do aplicativo
    },
    camera: {
      flex: 1,
    },
  });