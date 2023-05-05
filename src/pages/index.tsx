import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { HomeContainer } from 'src/containers/HomeContainer';

export default function Home() {
  return <HomeContainer />;
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
