import React from 'react';
import { Container, InputName, InputPass, Text } from './style';
import { styled } from 'styled-components/native';

const InputArea = styled.View`
    width: 100%;
    height: 65px;
    background-color: ${({ theme })=> theme.COLORS.PRIMARY_700};
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;
const Input = styled.TextInput`
    flex:1;
    font-size:16px;
    color:#004682;
    margin-left:10px;
`;

export default ({IconSvg, placeholder}) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill="#004682" />
            <Input
                placeholder={placeholder}
                placeholderTextColor="#004682"
            />
        </InputArea>
    );
}