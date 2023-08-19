import styled from "styled-components/native";

export const Container = styled.View`
    width:60px;
    height:60px;
    border-Radius:30px;
    background-Color:${({ theme })=>theme.COLORS.BUTTON_NEW};
    align-Items:center;
    justify-Content:center;
    margin-Bottom:20px;
`