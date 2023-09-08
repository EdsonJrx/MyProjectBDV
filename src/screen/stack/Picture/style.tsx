import styled from "styled-components/native";
import { Dimensions } from "react-native"
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TakePicProp } from "./types";

const { width } = Dimensions.get('window')

export const Container = styled.View`
    flex:1;
`;
export const Image = styled.Image`
    flex:1;
`;
export const TakePicture = styled.TouchableOpacity<TakePicProp>`
    position:absolute;
    bottom:${({size})=>size}px;
    width:${({size})=>size}px;
    height:${({size})=>size}px;
    z-index:99;
    left: ${({ size }) => (width - size) / 2}px;
`
export const Voltar = styled.TouchableOpacity`
    position:absolute;
    z-index:99;
    top:50px;
    left:20px;
    background-color:"white";
`
export const Icon = styled(MaterialCommunityIcons)`
    color:white;
`;