import Head from 'next/head';
import SearchList from '../components/SearchList';
import ListHeader from '../components/ListHeader';
import ListMessage from '../components/ListMessage';
import SearchListItem from '../components/SearchListItem';

export default function Bookmarks() {
  return (
    <>
      <Head>
        <title>Bookmarks</title>
        <meta
          name="description"
          content="Bookmarks page for the dictionary app"
        />
      </Head>
      <main>
        <ListHeader enable={false}>Bookmarks</ListHeader>
        <ListMessage>
          List empty. Bookmarked words will show up here.
        </ListMessage>
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
