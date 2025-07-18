import { repositoryPodcasts } from "../repositories/podcasts-repository"

export const serviceListEpisodes = async () => {
    const data = await repositoryPodcasts();

        return data;
};