import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { playersGetAll } from "./playersGetAll";

import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function playerAdd(newPlayerName: PlayerStorageDTO, group: string){
    try{
        const storagedPlayers = await playersGetAll(group)

        const playerAlreadyExists = storagedPlayers.filter(player => player.name === newPlayerName.name)
        if(playerAlreadyExists.length > 0){
            throw new AppError('Essa pessoa já está adicionada.')
        }

        const storage = JSON.stringify([...storagedPlayers, newPlayerName])

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
    } catch(err){
        throw err
    }
}