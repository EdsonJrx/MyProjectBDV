import React from 'react';

import * as S from './style';

import AppointsItem from '../appointsItem';
import ButtonAppoints from '../buttonAppoints';


const AppointmentList = () => {
    return (
        <S.Container>
            <S.DateArea>
                <S.DateDD>19</S.DateDD>
                <S.DateMM>Ago</S.DateMM>
                <S.DateYYYY>2023</S.DateYYYY>
            </S.DateArea>
            <S.BodyArea>
                <S.CodCC>2.0337</S.CodCC>
                <S.DescCC>Hospital Regional de Dourados Matogrosso do sul</S.DescCC>
                <S.AppointsArea>
                    <AppointsItem
                        valor="100" 
                        color="#f00"
                        title="Inicial"
                    />
                    <AppointsItem 
                        valor="150"
                        color="#0f0"
                        title="Final"
                    />
                    <AppointsItem
                        valor="50" 
                        color="#00f"
                        title="Rod"
                    />
                </S.AppointsArea>
                <S.Obs>Primeiro lançamento</S.Obs>  
            </S.BodyArea>
            <S.ButtonAppointsArea>
                <ButtonAppoints 
                    nome="md-checkmark-sharp"
                    color="#0f0"
                    
                />
                <ButtonAppoints 
                    nome="trash"
                    color="#f00"
                />
            </S.ButtonAppointsArea>
        </S.Container>
    );
}

export default AppointmentList;