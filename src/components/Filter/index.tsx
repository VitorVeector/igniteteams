import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'

type FilterProps = TouchableOpacityProps & S.FilteredStyleProps & {
    title: string;
}

export const Filter = ({title, isActive = false, ...rest}:FilterProps) => {
    return(
        <S.Container
            isActive={isActive}
            {...rest}>
            <S.TextIn>
                {title}
            </S.TextIn>
        </S.Container>
    )
}