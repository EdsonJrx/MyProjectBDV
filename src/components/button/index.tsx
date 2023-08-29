import * as S from './style'

export default ({texto, value}:{texto:string, value?:boolean})=>{
    return (
        <S.Container value={value}>
            <S.Text>{texto}</S.Text>
        </S.Container>
    )

}