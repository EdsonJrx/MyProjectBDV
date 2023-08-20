import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width:100%;
    flex-direction:row;
`;
export const DateArea = styled.View`
    width:28px;
    height:88px;
    background-color:${({theme})=>theme.COLORS.PRIMARY_900};
    border-top-left-radius: 15px ;
    border-bottom-left-radius:15px;
    justify-content:center;
    align-items:center;
`;
export const DateDD = styled.Text`
    font-size:18px;
    font-weight:bold;
    color:#fff;
    margin-bottom:-5px;
`;
export const DateMM= styled.Text`
    font-size:12px;
    color:#fff;
`;
export const DateYYYY = styled.Text`
    font-size:9px;
    color:#fff;
`;
export const BodyArea = styled.View`
    flex:2;
    margin:0 10px;
`;
export const CodCC = styled.Text`
    font-size:18px;
    font-weight:bold;
`;
export const DescCC = styled.Text`
    flex:1;
    font-size:18px;
    margin-top:-5px;
`;
export const AppointsArea = styled.View`
    flex:1;
    flex-direction:row;
    overflow:hidden;
`;
export const Obs = styled.Text`
    overflow:hidden;
`;
export const ButtonAppointsArea = styled.View`
    align-items:center;
    justify-content:space-around;
`;