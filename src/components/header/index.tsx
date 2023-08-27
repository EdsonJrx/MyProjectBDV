import React, { useState} from 'react';
import Search from '../search';

const Header = () => {
    const [inputField, setInputField] = useState('')

    const handleClear = () => {
        setInputField('')
    }

    return(
        <>
        <Search 
            placeholder='Buscar'
            onChangeText={t=>setInputField(t)}
            value={inputField}
            handleClear={handleClear}
        />
        </>
    )
}

export default Header