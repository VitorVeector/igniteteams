import styled, {css} from 'styled-components/native'
import {TouchableOpacity, Text} from 'react-native'

export type FilteredStyleProps = {
    isActive?: boolean
}

export const Container = styled(TouchableOpacity)<FilteredStyleProps>`
    ${({theme, isActive}) => isActive && css`
        border: 1px solid ${theme.COLORS.GREEN_700};
    `}

    border-radius: 4px;
    margin-right: 12px;

    height: 38px;
    width: 70px;

    align-items: center;
    justify-content: center;

    flex-direction: row;
`

export const TextIn = styled.Text`

    text-transform: uppercase
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.WHITE};
    `}
`