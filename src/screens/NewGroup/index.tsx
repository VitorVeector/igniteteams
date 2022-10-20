import {Header} from '@components/Header' 
import {Highlight} from '@components/Highlight' 
import {Button} from '@components/Button' 
import {Input} from '@components/Input' 
import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { groupCreate } from '@storage/group/groupCreate';


export const NewGroup = () => {

    const [groupName, setGroupName] = useState<string>('')

    const navigation = useNavigation()

    async function handlePlayer(){
        try{
            await groupCreate(groupName)
            navigation.navigate('players', {group: groupName})
        } catch (err){
            console.log(err)
        }
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
                <Input placeholder='Nome da turma' onChangeText={setGroupName} value={groupName}/>
                <Button onPress={handlePlayer} text='Criar'/>
            </S.Content>      
        </S.Container>
    )
}