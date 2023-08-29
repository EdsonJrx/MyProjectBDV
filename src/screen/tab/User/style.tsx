import styled from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
flex:1;
padding:0px 20px 0px 20px;
align-items:center;
`;

export const Title = styled.Text`
    position:absolute;
    font-size:32px;
    font-weight:bold;
    color:${({theme})=>theme.COLORS.PRIMARY_900};
    padding-left:20px;
    align-self:flex-start;
`;

export const AreaSearch = styled.View`
    padding-top:45px;
    flex-direction:row;
    align-items:center;
    gap:10px;
`;
export const IconButton = styled.TouchableOpacity`
    margin-bottom:10px;
`
export const Icon = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
`;
export const AreaPrefixo = styled.View`
    align-items:center;
    padding:5px 0 5px 0;
`;
export const Prefixo = styled.Text`
    font-size:48px;
    color:${({theme})=>theme.COLORS.PRIMARY_900}; 
`;
export const Desc = styled.Text`
    font-size:32px;
    color:${({theme})=>theme.COLORS.PRIMARY_900};
    max-height:115px;
    padding-bottom:10px;
`;

export const Image = styled.Image`
    width:100%;
    height:250px;
`;
export const AreaBotoes= styled.View`
    width:100%;
    position:absolute;
    bottom:40px;
    flex-direction:row;
    justify-content:space-around
`;