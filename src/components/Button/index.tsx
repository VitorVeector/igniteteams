import * as S from './styles'

type ButtonProps = {
    text: string;
    type?: S.ButtonTypeStyleProps
}

export const Button = ({text, type='PRIMARY', ...rest}: ButtonProps) => {
    return (
            <S.Container type={type}>
                <S.TextButton>{text}</S.TextButton>
            </S.Container>
    )
}