import {getFreeChampions} from "../services/request_service.js";
import {send_response} from "../utils/send_response.js";


export const requests_controller = async (message) => {
    const parsedMessage = JSON.parse(JSON.parse(message));
    if(parsedMessage["subcommand"] === 'free-champions'){
        const freeChampions = await getFreeChampions();
        await send_response('lol-responses', JSON.stringify({
            channelId: parsedMessage["channelId"],
            freeChampions,
        }))
    }
}