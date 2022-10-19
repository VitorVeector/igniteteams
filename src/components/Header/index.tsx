import React from 'react'
import * as S from './styles'
import LogoImg from '@assets/logo.png'
import { useNavigation } from '@react-navigation/native'

type HeaderProps = {
    showBackButton?: boolean
}

export const Header = ({showBackButton}: HeaderProps) => {
    const navigation = useNavigation()

    function handleGoBack(){
        navigation.navigate('groups');
    }

    return(
        <S.Container>
            {
                showBackButton &&
                <S.BackButton onPress={handleGoBack}>
                    <S.BackIcon />
                </S.BackButton>    
            }
            <S.Logo source={LogoImg}/>
        </S.Container>
    )
}