import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-Items: center;
    justify-Content: flex-start;
    padding:10px 10px 0px 10px;
    background-color:${({theme})=>theme.COLORS.PRIMARY_600}
`