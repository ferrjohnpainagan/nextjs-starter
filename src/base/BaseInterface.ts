import { ITranslateFunction } from '@hooks/Translate/TranslateType';
import { useAppDispatch } from '@redux/hooks';
import { NextRouter } from 'next/router';
import { ReactElement, ReactNode } from 'react';
import { SetPureStateType, SetStateType } from './BaseType';

export interface IBaseProps {
  children: ReactNode | ReactElement[];
}

export interface IBaseVoidProps {}

export interface IBaseState {}

export interface IConstructor<T> {
  new (...params: any): T;
}

export interface IKeyValue {
  key: string;
  value: string | number | boolean | ReactNode;
}

export interface IAnyKeyValue<T = string> {
  [key: string]: T;
}

export interface ICommonHelperParams<
  P extends IBaseVoidProps = {},
  S extends IBaseState = {},
> {
  props: P;
  state: S;
  router: NextRouter;
  isAuthenticated: boolean;
  checkAuthentication(params: ICheckAuthenticationParams): void;
  translate: ITranslateFunction;
  setState: SetStateType<S>;
  pureSetState: SetPureStateType<S>;
  dispatch: ReturnType<typeof useAppDispatch>;
}

export interface IBaseHelperParams {}

export interface IBaseHelperReturnType {}

export interface IBaseComponentParams<
  P extends IBaseVoidProps = {},
  S extends IBaseState = {},
  H = any,
> {
  props?: P;
  initialState?: S;
  chain?: string;
  helperHook?(helperParams: ICommonHelperParams<P, S>): H;
}

export interface ITokenData {
  expires: string;
  token: string;
}

export interface IAuthenticationToken {
  access_token: string;
  refresh_token: string;
}

export interface IBaseComponentReturnType<S extends IBaseState, H> {
  isAuthenticated: boolean;
  state: S;
  helper: H;
  currency: string;
  router: NextRouter;
  checkAuthentication(params: ICheckAuthenticationParams): void;
  translate: ITranslateFunction;
  setState: SetStateType<S>;
  pureSetState: SetPureStateType<S>;
  dispatch: ReturnType<typeof useAppDispatch>;
}

export interface ICheckAuthenticationAfterLoginParams {
  isLogin?: boolean;
  isNew?: boolean;
}

export interface ICheckAuthenticationParams {
  showLoginModal?: boolean;
  authenticatedCallback?(): void;
  notAuthenticatedCallback?(): void;
  afterLoginCallback?(params: ICheckAuthenticationAfterLoginParams): void;
}

// export interface INavigationMenuItem {
//     title: string;
//     to: string;
//     onClick?(): void;
//     icon?: string;
//     badgeCount?: number;
//     hide?: boolean;
//     isActive?: boolean;
// }
