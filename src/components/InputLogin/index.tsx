import React, { FunctionComponent, useState } from 'react';
import { InputArea, Input, Icone } from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TSecIcon } from './types';

import { InputLoginProps } from './types';

const InputLogin: FunctionComponent<InputLoginProps> = ({icon, placeholder, value, onChangeText, password}) => {
    
    const [showPass, setShowPass] = password? useState(true) : useState(false);
    const [secIcon, setSecIcon]= password? useState<TSecIcon>("eye-off") : useState<TSecIcon>();

    const handleShowPassword = () => {
        if(password){
            if(showPass){
                setShowPass(!showPass);
                setSecIcon("eye")
            }else{
                setShowPass(!showPass);
                setSecIcon("eye-off")
            }
        }else{
            setSecIcon("")
        }
    }
    
    return (
        <InputArea>
            <MaterialCommunityIcons name={icon} size={24} color="#004682" />
            <Input
                placeholder={placeholder}
                placeholderTextColor="#004682"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={showPass}
            />
            <Icone onPress={handleShowPassword}>
            <MaterialCommunityIcons name={secIcon} size={24} color="#004682" />
            </Icone>
        </InputArea>
    );
}

export default InputLogin