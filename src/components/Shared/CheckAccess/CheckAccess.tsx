import { useBaseComponent } from '@base/BaseComponent';
import { ReactNode, useEffect } from 'react';

export const CheckAccess = ({ children }: { children: ReactNode }) => {
  const { router, isAuthenticated } = useBaseComponent();
  useEffect(() => {
    (async () => {
      if (!isAuthenticated)
        await router.push(`/login?return=${router.pathname}`);
    })();
  }, [isAuthenticated]);

  return (
    <>
      {/* <PersistGate loading={<LinearProgress />} persistor={persistor}> */}
      {isAuthenticated && <>{children}</>}
      {/* </PersistGate> */}
    </>
  );
};
