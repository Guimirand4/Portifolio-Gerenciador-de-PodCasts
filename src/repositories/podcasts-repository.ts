import fs from 'fs';
import path from 'path';
import { Podcast } from '../models/podcast-model';




const pathData = path.join(__dirname, "../data/podcasts.json");

export const repositoryPodcasts = async (): Promise<Podcast[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8");
    const jsonFile = JSON.parse(rawData);
    return jsonFile;

}