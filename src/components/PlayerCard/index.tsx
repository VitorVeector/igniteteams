import * as S from './styles'
import {ButtonIcon} from '@components/ButtonIcon'

type PlayerCardProps ={
    name: string;
    onRemove: (name: string) => void;
}

export const PlayerCard = ({name, onRemove}: PlayerCardProps) => {

    return (
        <S.Container>
            <S.Icon name='person'/>

            <S.Name>
                {name}
            </S.Name>

            <ButtonIcon icon='close' type='SECONDARY' onPress={() => onRemove(name)}/>
        </S.Container>
    )
} 