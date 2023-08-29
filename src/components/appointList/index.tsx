import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br'
import * as S from './style';

import AppointsItem from '../appointsItem';
import ButtonAppoints from '../buttonAppoints';
import { IAppointments } from '../../apis/appointment/types';
import { SheetManager } from 'react-native-actions-sheet';

moment.locale('pt-br')
const AppointmentList = ({data}:{data:IAppointments}) => {
    return (
        <S.Container onPress={()=>{SheetManager.show("appointment-detail")}}>
            <S.DateArea>
                <S.DateDD>{moment(data.DATAHORAINICIO).format("DD")}</S.DateDD>
                <S.DateMM>{moment(data.DATAHORAINICIO).format('MMM')}</S.DateMM>
                <S.DateYYYY>{moment(data.DATAHORAINICIO).year()}</S.DateYYYY>
            </S.DateArea>
            <S.BodyArea>
                <S.CodCC>{data.CODCCUSTO}</S.CodCC>
                <S.DescCC>{data.DESCRICAO}</S.DescCC>
                <S.AppointsArea>
                    <AppointsItem
                        valor={data.HORIMETRO} 
                        color="#f00"
                        title="Inicial"
                    />
                    {data.HORIMETROFIM && <AppointsItem 
                        valor={data.HORIMETROFIM}
                        color="#0f0"
                        title="Final"
                    />}
                    {data.HORIMETROFIM && <AppointsItem
                        valor={data.HORIMETROFIM - data.HORIMETRO} 
                        color="#00f"
                        title="Rod"
                    />}
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