import * as S from './styles'
import {Header} from '@components/Header' 
import {Highlight} from '@components/Highlight' 

export const Player = () => {
    return (
        <S.Container>
            <Header showBackButton/>

            <Highlight title='Nome da turma' subtitle='adicione a galera e separe os times'/>
            
        </S.Container>
    )
}