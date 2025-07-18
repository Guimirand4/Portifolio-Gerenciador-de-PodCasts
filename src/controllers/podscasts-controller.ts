import {IncomingMessage, ServerResponse} from 'http';
import {serviceListEpisodes} from "../services/list-episodes-service"
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { StatusCode } from '../utils/status-code';
import { filterPodCastModel } from '../models/filter-podcast-model';


export const getListEpisodes = async (req : IncomingMessage, res: ServerResponse) => {

    const content: filterPodCastModel = await serviceListEpisodes();

    res.writeHead(content.statusCode, {"Content-Type": "application/json"});
    res.end(JSON.stringify(content.body));
};


export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
   
    const content: filterPodCastModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, {"Content-Type": "application/json"});
    res.end(JSON.stringify(content.body));
}