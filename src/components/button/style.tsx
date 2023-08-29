import styled from "styled-components/native";

export type TButton = {
    value?:boolean
}

export const Container = styled.TouchableOpacity<TButton>`
    background-color:${({theme, value})=>value === true? theme.COLORS.PRIMARY_900: theme.COLORS.BUTTON_NEW};
    padding:10px;
    width:30%;
    border-radius:50px;
    align-items:center;
    shadow-color: #000;
    shadow-offset: 5px 5px;
    shadow-opacity: 0.1;
    elevation: 5;
`
export const Text = styled.Text`
    color:${({theme})=>theme.COLORS.TEXT_PRIMARY};
    font-size:20px;
`