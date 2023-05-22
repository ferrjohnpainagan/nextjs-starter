import { HomeContainer } from 'src/containers/HomeContainer';

export default function Home() {
  return <HomeContainer />;
}

Home.needAuth = true;

export async function getStaticProps() {
  return {
    props: {},
  };
}
