import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-Items: center;
    justify-Content: flex-start;
    padding:20px;
    background-color:${({theme})=>theme.COLORS.BACKGROUND}
`