import {Header} from '@components/Header' 
import {Highlight} from '@components/Highlight' 
import {Button} from '@components/Button' 
import {Input} from '@components/Input' 
import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { groupCreate } from '@storage/group/groupCreate';
import { AppError } from '@utils/AppError'
import { Alert } from 'react-native'


export const NewGroup = () => {

    const [groupName, setGroupName] = useState<string>('')

    const navigation = useNavigation()

    async function handlePlayer(){
        try{
            if(groupName.trim().length === 0){
                return Alert.alert('Novo grupo', 'Informe o nome da turma.')
            }
            await groupCreate(groupName)
            navigation.navigate('players', {group: groupName}) // Caso groupAlreadyExists === TRUE => essa linha de codigo nao eh passada
        } catch (err){
            if(err instanceof AppError){
                Alert.alert('Novo grupo', err.message)
            } else {
                Alert.alert('Novo grupo', 'Não é possível criar um novo grupo.')
            }
        }
    }

    return (
        <S.Container>
            <Header showBackButton/>     
            <S.Content>
                <S.Icon/>
                <Highlight
                    title='Nova turma'
                    subtitle='Crie uma turma para adicionar pessoas.'
                    />
                <Input placeholder='Nome da turma' onChangeText={setGroupName} value={groupName}/>
                <Button onPress={handlePlayer} text='Criar'/>
            </S.Content>      
        </S.Container>
    )
}