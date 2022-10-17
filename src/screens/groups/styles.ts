import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    width: 100%;
    padding: 24px;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
`

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_300};
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme}) => theme.FONT_SIZE.XL}
`