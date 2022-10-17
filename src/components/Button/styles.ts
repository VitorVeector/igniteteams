import { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type ButtonProps = {
    type: ButtonTypeStyleProps;
}

type TextProps = {
    children: ReactNode
}

export const Container = styled(TouchableOpacity) <ButtonProps>`
    flex: 1;
    width: 100%;

    max-height: 56px;
    min-height: 56px;

    background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

    justify-content: center;
    align-items: center;

    border-radius: 6px;
`;

export const TextButton = styled.Text`
    font-size: ${({theme})=> theme.FONT_SIZE.MD};
    color: ${({theme})=> theme.COLORS.WHITE};
    font-family: ${({theme})=> theme.FONT_FAMILY.BOLD}
`