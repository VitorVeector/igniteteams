import { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type ButtonProps = {
    type: ButtonTypeStyleProps;
}


export const Container = styled(TouchableOpacity) <ButtonProps>`
    flex: 1;
    width: 100%;
    margin-top: 20px;

    max-height: 56px;
    min-height: 56px;

    background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

    justify-content: center;
    align-items: center;

    border-radius: 6px;
`;

export const TextButton = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.WHITE};
        font-family: ${theme.FONT_FAMILY.BOLD}
    `}
`