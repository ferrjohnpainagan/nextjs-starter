import {
  IApiMutationParams,
  IBaseApiRequestBody,
  IBaseApiResponse,
  IBaseApiResponseBody,
} from './ApiType';

export function apiMutation<
  RESP extends IBaseApiResponseBody,
  REQ extends IBaseApiRequestBody,
>(params: IApiMutationParams<RESP, REQ>) {
  const { builder, query, transformResponse } = params;

  return builder.mutation<IBaseApiResponse<RESP>, REQ>({
    query,
    transformResponse,
  });
}
