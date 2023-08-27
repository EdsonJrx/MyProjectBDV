import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width:30px;
    height:30px;
    border-Radius:15px;
    align-Items:flex-end;
    justify-Content:center;
    margin-right:20px;
`
export const Note = styled.View`
    position:absolute;
    top:0;
    width:10px;
    height:10px;
    border-Radius:5px;
    background-Color:${({theme})=>theme.COLORS.NOTIFICATION};
`