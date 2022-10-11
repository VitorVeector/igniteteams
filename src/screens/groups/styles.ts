import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
`

export const Title = styled.Text`
    color: #fff;
    font-size: 32px;
`