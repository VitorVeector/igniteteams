import * as S from './styles'
import {TouchableOpacityProps} from 'react-native'

type ButtonProps = TouchableOpacityProps & {
    text: string;
    type?: S.ButtonTypeStyleProps
}

export const Button = ({text, type='PRIMARY', ...rest}: ButtonProps) => {
    return (
            <S.Container type={type} {...rest}>
                <S.TextButton>{text}</S.TextButton>
            </S.Container>
    )
}