import React from "react";
import * as S from "./style";

import { Ionicons } from '@expo/vector-icons';

const ButtonAppoints = ({nome, color}) =>{
    return(
        <S.Container>
            <S.Body>
                <Ionicons name={nome} size={24} color={color} />
            </S.Body>
            <S.Shadow/>
        </S.Container>
    )
};

export default ButtonAppoints;