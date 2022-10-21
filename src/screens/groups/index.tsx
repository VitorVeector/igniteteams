import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import React, { useState, useCallback } from 'react'
import * as S from './styles';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import {useNavigation} from '@react-navigation/native'
import { groupsGetAll } from '@storage/group/groupGetAll';
import {useFocusEffect} from '@react-navigation/native'
import { Alert } from 'react-native';

export function Groups() {

  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewGroup(){
    navigation.navigate('newgroup')
  }

  async function fetchGroups(){
    try {
      const data = await groupsGetAll()
      setGroups(data)
    } catch(err){
      console.log(err)
    }
  }

  function handleOpenGroups(group: string){
    navigation.navigate('players', {group})
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <S.Container>
      <Header/>
      <Highlight title='Turmas' subtitle='Jogue com sua turma'/>
      <FlatList
        style={{width: '100%'}}
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => <GroupCard title={item} onPress={() => handleOpenGroups(item)} />}
        contentContainerStyle={ groups.length===0 && {flex: 1}}
        ListEmptyComponent={() => <ListEmpty message='Que tal cadastrar uma primeira turma'/>}
        />
        <Button onPress={handleNewGroup} text='Criar nova turma'/>
    </S.Container>
  );
}
