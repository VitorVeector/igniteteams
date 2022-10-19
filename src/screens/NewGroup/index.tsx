import {Header} from '@components/Header' 
import {Highlight} from '@components/Highlight' 
import {Button} from '@components/Button' 
import {Input} from '@components/Input' 
import * as S from './styles'
import { useNavigation } from '@react-navigation/native'

export const NewGroup = () => {

    const navigation = useNavigation()

    function handlePlayer(){
        navigation.navigate('players', {group: ''})
    }

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
                <Button onPress={handlePlayer} text='Criar'/>
            </S.Content>      
        </S.Container>
    )
}