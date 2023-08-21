import React from 'react';

import * as S from './style';

import AppointsItem from '../appointsItem';
import ButtonAppoints from '../buttonAppoints';
import { IAppointments } from './types';


const AppointmentList = ({data}:{data:IAppointments}) => {
    return (
        <S.Container>
            <S.DateArea>
                <S.DateDD>19</S.DateDD>
                <S.DateMM>Ago</S.DateMM>
                <S.DateYYYY>2023</S.DateYYYY>
            </S.DateArea>
            <S.BodyArea>
                <S.CodCC>{data.CODCCUSTO}</S.CodCC>
                <S.DescCC>{data.IDPRJ}</S.DescCC>
                <S.AppointsArea>
                    <AppointsItem
                        valor={data.HORIMETRO} 
                        color="#f00"
                        title="Inicial"
                    />
                    <AppointsItem 
                        valor={data.HORIMETROFIM}
                        color="#0f0"
                        title="Final"
                    />
                    <AppointsItem
                        valor={data.HORIMETRO - data.HORIMETROFIM} 
                        color="#00f"
                        title="Rod"
                    />
                </S.AppointsArea>
                <S.Obs>{data.OBSERVACAO}</S.Obs>  
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