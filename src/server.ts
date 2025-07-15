import * as http from 'http';
import { getListEpisodes } from './controllers/podscasts-controller';

const port = process.env.PORT;

const server = http.createServer(
    async (req: http.IncomingMessage , res:http.ServerResponse) => {

    if(req.method === 'GET'){
       await getListEpisodes(req, res);

    }

});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});