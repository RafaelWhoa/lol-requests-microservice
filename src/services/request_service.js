import {logger} from "../utils/utils.index.js";
import dotenv from 'dotenv';

dotenv.config();

export const getFreeChampions = async () => {
    try {
        const response = await fetch('https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=' + process.env.RIOT_API_KEY);
        const data = await response.json();
        return data
    } catch (error) {
        logger.error("Unable to get free champions: " + error.message);
    }
}