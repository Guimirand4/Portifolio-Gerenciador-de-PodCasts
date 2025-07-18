import { filterPodCastModel } from "../models/filter-podcast-model";
import { repositoryPodcasts } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<filterPodCastModel> => {
  //define a interface de retorno
  let responseFormat: filterPodCastModel = {
    statusCode: 0,
    body: [],
  };
  
  const data = await repositoryPodcasts();

  if (data.length !== 0) {
    responseFormat.statusCode = StatusCode.OK; // OK
  } else {
    responseFormat.statusCode = StatusCode.NO_CONTENT; // No Content
  }
  responseFormat.body = data;

  return responseFormat;
};
