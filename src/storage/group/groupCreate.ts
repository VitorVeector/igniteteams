import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/storageConfig';
import { groupsGetAll } from './groupGetAll';

export async function groupCreate(newGroupName: string){
    try {
        const storagedGroup = await groupsGetAll()

        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify([...storagedGroup, newGroupName]) )
    } catch (error) {
        throw error
    }
}   