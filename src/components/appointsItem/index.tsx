import React from "react";
import * as S from './style'

const AppointsItem = ({valor, color, title}) =>{
    return(
        <S.Container style={{borderColor:color}}>
            <S.Value>{valor}</S.Value>
            <S.Title>{title}</S.Title>
        </S.Container>
    )
};

export default AppointsItem;