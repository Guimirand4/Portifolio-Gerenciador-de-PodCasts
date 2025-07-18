import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podscasts-controller';
import { Routes } from './routes/routes';

const port = process.env.PORT;

const server = http.createServer(async (req: http.IncomingMessage , res:http.ServerResponse) => {
    
    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

    if(req.method === "GET" && baseUrl === Routes.LIST){
       await getListEpisodes(req, res);

    }

    if(req.method === "GET" && baseUrl === Routes.EPISODES){
        await getFilterEpisodes(req, res);
    }
}
);


server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});