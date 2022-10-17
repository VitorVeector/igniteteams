import React from 'react'
import { View } from 'react-native'
import * as S from './styles'

type HighlightProps = {
    title: string;
    subtitle: string
}

export const Highlight = ({title, subtitle}: HighlightProps) => {
    return (
        <S.Container>
            <S.Title>
                {title}
            </S.Title>

            <S.SubTitle>
                {subtitle}
            </S.SubTitle>

        </S.Container>
    )
}