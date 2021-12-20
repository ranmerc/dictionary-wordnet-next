import Head from 'next/head';
import ListMessage from '../components/ListMessage';
import MainLayout from '../components/MainLayout';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta
          name="description"
          content="Page you were looking for was not found"
        />
      </Head>
      <MainLayout>
        <ListMessage>
          You seem to be lost! Allow the navigation bar to guide you to your
          destination.
        </ListMessage>
      </MainLayout>
    </>
  );
}
