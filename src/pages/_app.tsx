import { CheckAccess } from '@components/Shared/CheckAccess/CheckAccess';
import { store } from '@redux/store';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import '../styles/globals.css';

type Props = AppProps;

export const App = ({ Component, ...props }: Props | any) => {
  let persistor = persistStore(store);
  const { pageProps } = props;
  const Page = (page: any) => page;
  const checkAuth = Component.needAuth
    ? (page: any) => <CheckAccess>{page}</CheckAccess>
    : Page;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider
          enableSystem={false}
          defaultTheme="dark"
          attribute="class"
        >
          {checkAuth(<Component {...pageProps} />)}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
