import * as React from 'react';
import * as S from './style'
import Header from '../../../components/header';
import Button from '../../../components/button';

export default () => {
    return (
        <S.Container>
            <S.Title>Equipamento</S.Title>
            <S.AreaSearch>
                <Header/>
                <S.IconButton>
                    <S.Icon name="qrcode-scan" size={24}/>
                </S.IconButton>
            </S.AreaSearch>
            <S.AreaPrefixo>
                <S.Prefixo>CP-01</S.Prefixo>
                <S.Desc>CAMINHÃO PIPA</S.Desc>
            </S.AreaPrefixo>

            <S.Image source={{ uri: 'https://mpterraplenagem.com.br/wp-content/uploads/2016/06/Pipa.jpg' }}/>

            <S.AreaBotoes>
                <Button texto={"Cancelar"}  />
                <Button texto={"Salvar"} value/>
            </S.AreaBotoes>

        </S.Container>
    )
}