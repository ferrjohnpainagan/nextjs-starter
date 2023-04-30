import { RootState } from '@redux/store';
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import { Request } from '@utils/Request/Request';
import { IRequestOption } from '@utils/Request/RequestType';
import { IBaseApiQueryParams } from './BaseApiQueryType';

export function baseApiQuery(
  params?: IBaseApiQueryParams,
): BaseQueryFn<IRequestOption> {
  const { preUrl } = params ?? { preUrl: '' };

  return async (requestParams: IRequestOption, { getState }): Promise<any> => {
    const request: Request = new Request(preUrl);
    const accessToken: string =
      (getState() as RootState).auth.accessToken ?? '';

    return request.sendRequest({ ...requestParams, accessToken });
  };
}
