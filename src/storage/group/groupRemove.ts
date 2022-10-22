import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';
import { groupsGetAll } from './groupGetAll';

export async function groupeRemove(groupName: string){
    try{
        const storagedGroup = await groupsGetAll()
        const newGroup = storagedGroup.filter(group => group !== groupName)
        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(newGroup))
        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`)
    } catch(err){
        throw new AppError('Não é possível remover esse grupo')
    }
}