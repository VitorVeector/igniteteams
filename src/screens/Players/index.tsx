import * as S from './styles'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { ButtonIcon } from '@components/ButtonIcon'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { Filter } from '@components/Filter'
import React, { useCallback, useRef, useState } from 'react'
import { FlatList, TextInput } from 'react-native'
import { PlayerCard } from '@components/PlayerCard'
import { ListEmpty } from '@components/ListEmpty'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import { playerAdd } from '@storage/players/playerAdd'
import { Alert } from 'react-native'
import { AppError } from '@utils/AppError'
import { playersGetByGroupAndTeam } from '@storage/players/playersGetByGroupAndTeam'
import { PlayerStorageDTO } from '@storage/players/PlayerStorageDTO'
import { useEffect } from 'react'
import { playerRemoveByGroup } from '@storage/players/playerRemoveByGroup'
import { groupeRemove } from '@storage/group/groupRemove'
import { Loading } from '@components/Loading'

type RouteParams = {
    group: string
}

export const Players = () => {
    const [isLoading, setIsLoading] = useState(true)

    const navigation = useNavigation()

    const newPlayerNameInputRef = useRef<TextInput>(null)

    const route = useRoute()
    const { group } = route.params as RouteParams

    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

    const [playerName, setPlayerName] = useState<string>('')

    async function handleAddPlayer(playerName: string) {
        if (playerName.trim().length === 0) {
            return Alert.alert('Nova pessoa', 'Informe o nome para adicionar pessoa.')
        }

        const newPlayer = {
            name: playerName,
            team,
        }

        try {
            await playerAdd(newPlayer, group)
            newPlayerNameInputRef.current?.blur()
            setPlayerName('')
            fetchPlayersByTeam()

        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Nova pessoa', error.message)
            } else {
                console.log(error)
                Alert.alert('Nova pessoa', 'Não é possível adicionar nova pessoa.')
            }

        }
    }

    async function fetchPlayersByTeam() {
        try {
            setIsLoading(true)
            const playersByTeam = await playersGetByGroupAndTeam(group, team);
            setPlayers(playersByTeam)
            

        } catch (error) {
            console.log(error);
            Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado.');
        } finally {
            setIsLoading(false)
        }
    }

    async function handleRemovePlayer(name: string) {
        try {
            Alert.alert('Remover player', `Deseja remover ${name} do grupo?`, [
                {
                    text: 'Remover',
                    onPress: async () => {
                        await playerRemoveByGroup(name, group)
                        fetchPlayersByTeam()
                    }
                },
                {
                    text: 'Cancelar',
                    style: 'cancel'
                }
            ])
        } catch (error) {
            console.log(error)
            Alert.alert('Remover player', 'Impossível de remover player')
        }

    }

    function handleRemoveGroup(groupName: string) {
        try {
            Alert.alert('Remover grupo', 'deseja remover esse grupo?', [
                {
                    text: 'Remover',
                    onPress: async () => {
                        await groupeRemove(groupName)
                        navigation.navigate('groups')
                    }
                },
                {
                    text: 'Cancelar',
                    style: 'cancel'
                }
            ])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPlayersByTeam()
    }, [team])


    return (
        <S.Container>
            <Header showBackButton />
            <Highlight title={group} subtitle='adicione a galera e separe os times' />

            <S.Form>
                <Input inputRef={newPlayerNameInputRef} placeholder='Nome da pessoa' autoCorrect={false} onChangeText={setPlayerName} value={playerName} />
                <ButtonIcon icon='add' onPress={() => handleAddPlayer(playerName)} />
            </S.Form>

            <S.HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <Filter title={item} isActive={item === team} onPress={() => setTeam(item)} />
                    )}
                    horizontal />
                <S.NumberOfPlayers>{players.length}</S.NumberOfPlayers>
            </S.HeaderList>

            {
                isLoading ? <Loading /> :
                    <FlatList
                        data={players}
                        keyExtractor={item => item.name}
                        renderItem={({ item }) => (
                            <PlayerCard name={item.name} onRemove={() => handleRemovePlayer(item.name)} />
                        )}
                        ListEmptyComponent={() => (
                            <ListEmpty message='Não há pessoas nesse time' />
                        )}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={[
                            { paddingBottom: 100 },
                            players.length === 0 && { flex: 1 }
                        ]} />
            }


            <Button text='Remover turma' type='SECONDARY' onPress={() => handleRemoveGroup(group)} />
        </S.Container>
    )
}