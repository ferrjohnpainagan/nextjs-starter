import { CheckAccess } from '@components/Auth/CheckAccess/CheckAccess';
import { wrapper } from '@redux/store';
import '@styles/globals.css';
import { StyledComponentsRegistry } from '@utils/Registry';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';

type Props = AppProps;

export const App = ({ Component, ...props }: Props | any) => {
  const { pageProps } = props;
  const Page = (page: any) => page;
  const checkAuth = Component.needAuth
    ? (page: any) => <CheckAccess>{page}</CheckAccess>
    : Page;

  return (
    <StyledComponentsRegistry>
      <ThemeProvider enableSystem={false} defaultTheme="dark" attribute="class">
        <GlobalStyles />
        {checkAuth(<Component {...pageProps} />)}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default wrapper.withRedux(App);
