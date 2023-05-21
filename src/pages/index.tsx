import { HomeBody } from '@components/Home/Body/HomeBody';
import { HomeHeader } from '@components/Home/Header/HomeHeader';
import { HomeLayout } from '@components/Home/Layout/HomeLayout';
import { TimeTracking } from '@components/Shared/TimeTracking/TimeTracking';

export default function Home(props: { date: string }) {
  const { date } = props;
  return (
    <HomeLayout>
      <TimeTracking date={new Date(date)} />
      <HomeHeader />
      <HomeBody />
    </HomeLayout>
  );
}

export async function getServerSideProps({ locale }: { locale: string }) {
  const date = new Date().toString();
  return {
    props: {
      date,
    },
  };
}
