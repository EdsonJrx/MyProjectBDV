import styled from 'styled-components/native'

export const InputArea = styled.View`
    flex:1;
    height: 50px;
    background-color: ${({ theme })=> theme.COLORS.BACKGROUND};
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    padding-right: 15px;
    align-items: center;
    margin-bottom: 15px;
    shadow-color: #000;
    shadow-offset: 5px 5px;
    shadow-opacity: 0.1;
    elevation: 5;
`;
export const Input = styled.TextInput`
    flex:1;
    height: 100%;
    font-size:16px;
    color:#004682;
    margin-left:10px;
`;
export const Icone = styled.TouchableOpacity``