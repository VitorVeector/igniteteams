import React from 'react'
import * as S from './styles'
import LogoImg from '@assets/logo.png'

type HeaderProps = {
    showBackButton?: boolean
}

export const Header = ({showBackButton}: HeaderProps) => {
    return(
        <S.Container>
            {
                showBackButton &&
                <S.BackButton>
                    <S.BackIcon />
                </S.BackButton>    
            }
            <S.Logo source={LogoImg}/>
        </S.Container>
    )
}