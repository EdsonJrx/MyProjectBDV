import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color:${({theme}) => theme.COLORS.BACKGROUND};
    flex:1;
    justify-content:center;
    align-items: center;
`
export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
    height:60px;
    background-color:${props => props.theme.COLORS.PRIMARY_900};
    border-radius:30px;
    justify-content:center;
    align-items:center;
`;

export const CustomButtonText = styled.Text`
    font-size:18px;
    color:${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`;
export const LoadingIcon = styled.ActivityIndicator`
    align-self:center;
`;
