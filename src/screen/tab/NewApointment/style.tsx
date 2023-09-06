import styled from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
    flex:1;
    padding:80px 30px 0px 30px;
    justify-content:flex-start;
    align-items:center;
`;

export const AreaButton = styled.View`
    width:100%;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
`;
export const AreaImage = styled.View`
    flex-direction:row;
    padding:0px 20px 20px 20px;
`;

export const Image = styled.Image`
    width:100%;
    height:250px;
`;

export const ButtonIcon = styled.TouchableOpacity`
    width:28px;
    height:28px;
    align-self:flex-end;
`;
export const Icon = styled(MaterialCommunityIcons)`
    color:${({theme})=>theme.COLORS.PRIMARY_900};
`;
