import { useAuth } from '@hooks/Authentication/AuthenticationHook';
import { useTranslate } from '@hooks/Translate/TranslateHook';
import { useAppDispatch } from '@redux/hooks';
import { openLoginTrigger } from '@redux/slices/login/login';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  IBaseComponentParams,
  IBaseComponentReturnType,
  IBaseState,
  IBaseVoidProps,
  ICheckAuthenticationParams,
} from './BaseInterface';

export function useBaseComponent<
  P extends IBaseVoidProps = {},
  S extends IBaseState = {},
  H = any,
>(params?: IBaseComponentParams<P, S>): IBaseComponentReturnType<S, H> {
  const {
    props = {} as P,
    initialState = {} as S,
    chain,
    helperHook,
  } = params ?? { initialState: {} as S };

  const [state, pureSetState] = useState<S>(initialState);
  const isAuthenticated: boolean = useAuth();
  const dispatch = useAppDispatch();
  const translate = chain ? useTranslate(chain) : (): string => '';
  const router = useRouter();

  const currency: string = process.env.CURRENCY ?? 'ریال';

  const setState = (newState: Partial<S>) => {
    pureSetState({
      ...state,
      ...newState,
    });
  };

  const checkAuthentication = (params: ICheckAuthenticationParams) => {
    const {
      showLoginModal = true,
      authenticatedCallback,
      notAuthenticatedCallback,
      afterLoginCallback,
    } = params;

    if (isAuthenticated) {
      authenticatedCallback?.();
    } else {
      notAuthenticatedCallback?.();

      if (showLoginModal) {
        dispatch(
          openLoginTrigger({
            open: true,
            afterLogin: (isLogin, isNew) => {
              afterLoginCallback?.({
                isLogin,
                isNew,
              });
            },
          }),
        );
      }
    }
  };

  const helper = helperHook?.({
    props,
    state,
    router,
    isAuthenticated,
    checkAuthentication,
    translate,
    setState,
    pureSetState,
    dispatch,
  });

  return {
    isAuthenticated,
    state,
    helper,
    currency,
    router,
    checkAuthentication,
    translate,
    setState,
    pureSetState,
    dispatch,
  };
}
