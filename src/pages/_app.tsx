import type { AppProps } from 'next/app';

import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

export const App = ({ Component, ...props }: AppProps) => {
  const { pageProps } = props;

  return (
    <ThemeProvider enableSystem={false} defaultTheme="dark" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
