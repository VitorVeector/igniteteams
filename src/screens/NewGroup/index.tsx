import {Header} from '@components/Header' 
import {Highlight} from '@components/Highlight' 
import {Button} from '@components/Button' 
import {Input} from '@components/Input' 
import * as S from './styles'

export const NewGroup = () => {
    return (
        <S.Container>
            <Header showBackButton/>     
            <S.Content>
                <S.Icon/>
                <Highlight
                    title='Nova turma'
                    subtitle='Crie uma turma para adicionar pessoas'
                    />
                <Input placeholder='Teste'/>
                <Button text='Criar'/>
            </S.Content>      
        </S.Container>
    )
}