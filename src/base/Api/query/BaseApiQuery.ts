import { RootState } from '@redux/store';
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import { useRequest } from '@utils/Request/Request';
import { IRequestOption } from '@utils/Request/RequestType';
import { IBaseApiQueryParams } from './BaseApiQueryType';

export function baseApiQuery(
  params?: IBaseApiQueryParams,
): BaseQueryFn<IRequestOption> {
  const { preUrl } = params ?? { preUrl: '' };
  const { sendRequest } = useRequest(preUrl);
  return async (requestParams: IRequestOption, { getState }): Promise<any> => {
    // const request = sendRequest();
    const accessToken: string =
      (getState() as RootState).auth.accessToken ?? '';

    return sendRequest({ ...requestParams, accessToken });
  };
}
