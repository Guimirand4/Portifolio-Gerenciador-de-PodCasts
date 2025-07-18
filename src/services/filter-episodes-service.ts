import { IncomingMessage } from "http";
import { repositoryPodcasts } from "../repositories/podcasts-repository";


export const serviceFilterEpisodes = async (podcastName: String | undefined) => {

    const queryString = podcastName?.split("?p=")[1] || "";
    
    const data = await repositoryPodcasts(queryString);
    return data;
}