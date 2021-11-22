import Head from 'next/head';
import ListHeader from '../components/ListHeader';
import SearchList from '../components/SearchList';
import ListMessage from '../components/ListMessage';
import SearchListItem from '../components/SearchListItem';

export default function Recent() {
  return (
    <>
      <Head>
        <title>Recent</title>
        <meta name="description" content="Recent page for the dictionary app" />
      </Head>
      <main>
        <ListHeader enable={false}>Recent</ListHeader>
        <ListMessage>List empty. Recent words will show up here.</ListMessage>
      </main>
      <style jsx>{`
        main {
          display: grid;
          row-gap: 2.2rem;
        }
      `}</style>
    </>
  );
}
