import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-Items: center;
    justify-Content: flex-start;

    background-color:${({theme})=>theme.COLORS.PRIMARY_600};
`
export const FooterListArea = styled.View`
    flex:1;
    padding:10px;
`
export const FooterList = styled.ActivityIndicator`
    size:25px ;
    color:${({theme})=>theme.COLORS.PRIMARY_900}
`