import { PodcastModel } from '../models/podcast-model';

export interface filterPodCastModel {
    statusCode: number,
    body: PodcastModel[];
}