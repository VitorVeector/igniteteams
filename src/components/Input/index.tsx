import * as S from './styles'
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'

export const Input = ({...rest}: TextInputProps) => {
    const { COLORS }= useTheme() 

    return (
        <S.Container placeholderTextColor={COLORS.GRAY_300} {...rest}/>
    )
}