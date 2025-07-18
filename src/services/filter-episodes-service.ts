import { stat } from "fs";
import { filterPodCastModel } from "../models/filter-podcast-model";
import { repositoryPodcasts } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (podcastName: String | undefined): Promise<filterPodCastModel> => {

    //define a interface de retorno
    let responseFormat: filterPodCastModel = {
        statusCode: 0,
        body: []
    };

    //busca os dados
    const queryString = podcastName?.split("?p=")[1] || "";    
    const data = await repositoryPodcasts(queryString);

    //verifica se tem conteudo
    if(data.length !== 0) {
        responseFormat.statusCode = StatusCode.OK;
    }else{
        responseFormat.statusCode = StatusCode.NO_CONTENT;
    }
    responseFormat.body = data;
    return responseFormat;
}