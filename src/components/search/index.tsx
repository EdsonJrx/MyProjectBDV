import React, { FunctionComponent, useState } from 'react';
import { InputArea, Input, Icone } from './style';
import { Ionicons } from '@expo/vector-icons';

import { InputLoginProps } from './types';

const Search: FunctionComponent<InputLoginProps> = ({placeholder, value, onChangeText, handleClear}) => {
    
    return (
        <InputArea>
            <Ionicons name="search" size={24} color="#004682" />
            <Input
                placeholder={placeholder}
                placeholderTextColor="#004682"
                value={value}
                onChangeText={onChangeText}
            />
            {value && 
                <Icone onPress={handleClear}>      
                    <Ionicons name="close" size={24} color="#004682" />
                </Icone>
            }
        </InputArea>
    );
}

export default Search