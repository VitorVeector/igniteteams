import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
`

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_300};
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme}) => theme.FONT_SIZE.XL}
`