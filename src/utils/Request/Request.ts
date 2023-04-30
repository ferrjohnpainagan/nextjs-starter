import axios, { AxiosInstance } from 'axios';
import { IAuthenticationToken } from '../../base/BaseInterface';
import {
  IErrorResponse,
  IErrorResponseDetail,
  IRequestOption,
  IResponse,
} from './RequestType';

export class Request {
  private client: AxiosInstance;

  // private verificationDataManager: VerificationDataManager;

  // private loading: Loading;

  public constructor(preUrl: string = '') {
    const baseURL: string = process.env.BASE_URL ?? '';

    this.client = axios.create({
      baseURL: `${baseURL}${preUrl}`,
    });

    // this.verificationDataManager = new VerificationDataManager();
    // this.loading = new Loading();
  }

  private successHandler<T>(
    response: IResponse<T>,
    successMessage?: string,
  ): void {
    if (successMessage) {
      console.log(successMessage);
    }
  }

  private errorHandler(error: IErrorResponse, errorMessage?: string): void {
    const {
      data: { detail },
    } = error.response;

    if (detail && typeof detail === 'object' && detail.length > 0) {
      detail.forEach(({ msg, loc }: IErrorResponseDetail): void => {
        console.log(`(${loc[1]}) ${msg}`);

        if (errorMessage) {
          console.log(errorMessage);
        }
      });
    }
  }

  private async checkAccessTokenValidation(): Promise<string> {
    const { access_token: accessToken, refresh_token: refreshToken } =
      {} as any;

    try {
      if (!accessToken) {
        throw new Error('Login is required');
      }

      const authorization = `Bearer ${accessToken}`;

      await this.sendRequest({
        url: '/auth/test-token',
        method: 'POST',
        sendAuthorization: false,
        autoErrorHandler: false,
        headers: {
          Authorization: authorization,
        },
      });

      return accessToken;
    } catch (error: any) {
      const { data: newTokens } = await this.sendRequest<
        IAuthenticationToken,
        string
      >({
        url: '/auth/refresh',
        method: 'POST',
        data: refreshToken,
        sendAuthorization: false,
        autoErrorHandler: false,
      });

      // this.verificationDataManager.setVerificationData(newTokens);

      return newTokens.access_token;
    }
  }

  public async sendRequest<T, D = any>({
    headers,
    autoSuccessHandler = true,
    autoErrorHandler = true,
    sendAuthorization = true,
    successMessage,
    errorMessage,
    showLoading,
    loadingMessage,
    accessToken = '',
    ...restOptions
  }: IRequestOption<D>): Promise<IResponse<T>> {
    let authorization: string = '';

    if (sendAuthorization) {
      // const accessToken = await this.checkAccessTokenValidation();

      if (accessToken) {
        authorization = `Bearer ${accessToken}`;
      }
    }

    try {
      // if (showLoading) {
      //     this.loading.show(loadingMessage);
      // }

      const response: IResponse<T> = await this.client({
        headers: {
          Authorization: authorization,
          ...headers,
        },
        ...restOptions,
      });

      if (autoSuccessHandler) {
        this.successHandler<T>(response, successMessage);
      }

      // if (showLoading) {
      //     this.loading.hide();
      // }

      return response;
    } catch (error: any) {
      if (autoErrorHandler) {
        this.errorHandler(error, errorMessage);
      }

      // if (showLoading) {
      //     this.loading.hide();
      // }

      throw error;
    }
  }
}
