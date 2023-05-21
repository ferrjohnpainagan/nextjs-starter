import { HomeLayout } from '@components/Home/Layout/HomeLayout';
import { TimeTracking } from '@components/Shared/TimeTracking/TimeTracking';

export default function ISR(props: { date: string }) {
  const { date } = props;
  return (
    <HomeLayout>
      <TimeTracking date={new Date(date)} />
    </HomeLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const date = new Date().toString();

  return {
    props: {
      date,
    },
    revalidate: 10,
  };
}
