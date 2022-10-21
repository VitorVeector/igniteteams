import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';
import { groupsGetAll } from './groupGetAll';

export async function groupCreate(newGroupName: string){
    try {
        const storagedGroup = await groupsGetAll()

        const groupAlreadyExists = storagedGroup.includes(newGroupName)

        if(groupAlreadyExists){
            throw new AppError('Já existe um grupo cadastrado com esse nome.')
        }

        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify([...storagedGroup, newGroupName]) )
    } catch (error) {
        throw error
    }
}   