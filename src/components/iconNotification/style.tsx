import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width:30px;
    height:30px;
    border-Radius:15px;
    background-Color:${({theme})=>theme.COLORS.BACKGROUND};
    align-Items:flex-end;
    justify-Content:flex-start;
    margin-right:20px;
`
export const Note = styled.View`
    width:10px;
    height:10px;
    border-Radius:5px;
    background-Color:${({theme})=>theme.COLORS.NOTIFICATION};
`