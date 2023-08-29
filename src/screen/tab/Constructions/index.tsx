import * as React from 'react';
import * as S from './style'
import Header from '../../../components/header';
import Button from '../../../components/button';

export default () => {
    return (
        <S.Container>
            <S.Title>Obras</S.Title>
            <S.AreaSearch>
                <Header/>
            </S.AreaSearch>
            <S.AreaPrefixo>
                <S.Prefixo>2.0385</S.Prefixo>
                <S.Desc>Caarapó e Fátima do Sul/MS - AGESUL - Lote 02</S.Desc>
            </S.AreaPrefixo>

            <S.Image source={{ uri: 'https://www.habitacao.engepar.com/media/images_site/banner-residencial-san-lorenzo.jpg' }}/>

            <S.AreaBotoes>
                <Button texto={"Cancelar"}  />
                <Button texto={"Salvar"} value/>
            </S.AreaBotoes>

        </S.Container>
    )
}