import * as S from './style'
import { IconDescProps } from './types';

export default ({icon, texto}:IconDescProps)=>{
    return (
        <S.Container>
            <S.Icon name={icon} size={28} />
            <S.Text>{texto}</S.Text>
        </S.Container>
    );
}