import React, { FunctionComponent } from 'react';
import { InputArea, Input } from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { InputLoginProps } from './types';

const InputLogin: FunctionComponent<InputLoginProps> = ({icon, secondIcon, placeholder, value, onChangeText, password}) => {
    return (
        <InputArea>
            <MaterialCommunityIcons name={icon} size={24} color="#004682" />
            <Input
                placeholder={placeholder}
                placeholderTextColor="#004682"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
            <MaterialCommunityIcons name={secondIcon} size={24} color="#004682" />
        </InputArea>
    );
}

export default InputLogin