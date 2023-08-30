import * as S from './style'

export default ({texto, value, onClick}:{texto:string, value?:boolean,  onClick:()=>void})=>{
    return (
        <S.Container value={value} onPress={onClick}>
            <S.Text>{texto}</S.Text>
        </S.Container>
    )

}