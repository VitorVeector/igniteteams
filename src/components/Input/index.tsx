import * as S from './styles'
import { TextInput, TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'

type InputProps = TextInputProps & {
    inputRef?: React.RefObject<TextInput>
}

export const Input = ({...rest}: InputProps) => {
    const { COLORS }= useTheme() 

    return (
        <S.Container placeholderTextColor={COLORS.GRAY_300} {...rest}/>
    )
}