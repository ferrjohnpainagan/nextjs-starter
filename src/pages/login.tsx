import { useBaseComponent } from '@base/BaseComponent';
import { updateAuthState } from '@redux/slices/authentication/AuthenticationSlice';
import { Url } from 'next/dist/shared/lib/router/router';

function login() {
  const { dispatch, router, isAuthenticated } = useBaseComponent();
  const { query } = router;
  if (isAuthenticated) {
    return router.back();
    // or
    // return router.push('/');
  }

  const loginHandler = () => {
    dispatch(updateAuthState({ userToken: 'test token' }));
    if (query && query.return) {
      router.push(query.return as Url); // Cast query.return to Url type
    }
  };
  return (
    <div>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}

export default login;
