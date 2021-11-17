import ListHeader from '../components/ListHeader';
import SearchListItem from '../components/SearchListItem';
import Head from 'next/head';
import SearchList from '../components/SearchList';

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
        <SearchList>
          <SearchListItem />
          <SearchListItem />
          <SearchListItem />
          <SearchListItem />
          <SearchListItem />
          <SearchListItem />
          <SearchListItem />
        </SearchList>
        {/* <ListMessage>
          List empty. Bookmarked words will show up here.
        </ListMessage> */}
      </main>
      <style jsx>{`
        main {
          display: grid;
          row-gap: 1.56rem;
        }
      `}</style>
    </>
  );
}
