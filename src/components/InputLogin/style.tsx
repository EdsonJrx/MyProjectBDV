import styled from 'styled-components/native'

export const Container = styled.View`
    
`;
export const InputName = styled.TextInput`
    margin-top:50px;
    width:300px;
    height:60px;
    border-bottom-color:${({ theme }) => theme.COLORS.PRIMARY_900};
    border-bottom-width:2px;
    font-size:24px;
    color:${({ theme }) => theme.COLORS.PRIMARY_900};
`;
export const InputPass = styled.TextInput`
    margin-top:50px;
    width:300px;
    height:60px;
    border-bottom-color:${({ theme }) => theme.COLORS.PRIMARY_900};
    border-bottom-width:2px;
    font-size:24px;
    color:${({ theme }) => theme.COLORS.PRIMARY_900};
`;
export const Text = styled.Text`

`;