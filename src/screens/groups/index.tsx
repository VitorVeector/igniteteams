import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import React, { useState } from 'react'
import * as S from './styles';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Groups() {

  const [groups, setGroups] = useState<string[]>(['Testando'])

  return (
    <S.Container>
      <Header/>
      <Highlight title='Turmas' subtitle='Jogue com sua turma'/>
      <FlatList
        style={{width: '100%'}}
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => <GroupCard title={item}/>}
        contentContainerStyle={ groups.length===0 && {flex: 1}}
        ListEmptyComponent={() => <ListEmpty message='Que tal cadastrar uma primeira turma'/>}
        />
        <Button text='Criar nova turma' type='PRIMARY'/>
    </S.Container>
  );
}
