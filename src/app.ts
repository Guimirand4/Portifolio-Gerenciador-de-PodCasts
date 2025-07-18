import { getFilterEpisodes, getListEpisodes } from './controllers/podscasts-controller';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';
import * as http from 'http';

export const app = async (req: http.IncomingMessage , res:http.ServerResponse) => {
    
    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

    if(req.method === HttpMethod.GET && baseUrl === Routes.LIST){
       await getListEpisodes(req, res);

    }

    if(req.method === HttpMethod.GET && baseUrl === Routes.EPISODES){
        await getFilterEpisodes(req, res);
    }
} 