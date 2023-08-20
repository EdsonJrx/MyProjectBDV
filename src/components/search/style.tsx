import styled from 'styled-components/native'

export const InputArea = styled.View`
    width: 100%;
    height: 50px;
    background-color: ${({ theme })=> theme.COLORS.PRIMARY_700};
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    padding-right: 15px;
    align-items: center;
    margin-bottom: 30px;
`;
export const Input = styled.TextInput`
    flex:1;
    height: 100%;
    font-size:16px;
    color:#004682;
    margin-left:10px;
`;
export const Icone = styled.TouchableOpacity``