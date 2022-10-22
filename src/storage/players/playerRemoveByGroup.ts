import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { playersGetAll } from "./playersGetAll";

export async function playerRemoveByGroup(name:string, group: string) {
    try {
        const storage = await playersGetAll(group)
        const newPlayers = storage.filter(player => player.name !== name)
        const players = JSON.stringify(newPlayers)
        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players)
    } catch (error) {
        throw error
    }
}