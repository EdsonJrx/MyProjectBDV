import styled from "styled-components/native";

export const Container = styled.View`
    height:38px;
    width:38px;
    justify-content:flex-start;
    align-items:center;
`
export const Shadow = styled.View`
    height:38px;
    width:38px;
    border-radius:50%;
    margin-top:1px;
    background-color:#d3d3d3;
    position:absolute;
    
`;
export const Body = styled.TouchableOpacity`
    justify-content:center;
    align-items:center;
    height:36px;
    width:36px;
    border-radius:50%;
    background-color:${({theme})=>theme.COLORS.BACKGROUND};
    position:absolute;
    z-index:1;
`;