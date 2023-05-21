import { HomeLayout } from '@components/Home/Layout/HomeLayout';
import { TimeTracking } from '@components/Shared/TimeTracking/TimeTracking';

export default function SSR(props: { date: string }) {
  const { date } = props;
  return (
    <HomeLayout>
      <TimeTracking date={new Date(date)} />
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
