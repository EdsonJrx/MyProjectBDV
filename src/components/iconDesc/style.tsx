import styled from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
    width:100%;
    flex-direction:row;
`;

export const Icon = styled(MaterialCommunityIcons)`
    color:${({theme})=>theme.COLORS.PRIMARY_900};
`;

export const Text = styled.Text`
    color:${({theme})=>theme.COLORS.PRIMARY_900};
    font-size:28px;
`;