import Head from 'next/head';
import SearchList from '../components/SearchList';
import ListHeader from '../components/ListHeader';
import ListMessage from '../components/ListMessage';
import MainLayout from '../components/MainLayout';
import SearchListItem from '../components/SearchListItem';
import { useBookmarkContext } from '../context/BookmarkContext';

export default function Bookmarks() {
  // use bookmark context to read bookmarks stored in localStorage
  const { bookmark, setBookmark } = useBookmarkContext();

  // clear all bookmarks on button click
  const clearBookmark = () => {
    setBookmark({
      type: 'CLEAR',
    });
  };

  return (
    <>
      <Head>
        <title>Bookmarks</title>
        <meta
          name="description"
          content="Bookmarks page for the dictionary app"
        />
      </Head>
      <MainLayout>
        <ListHeader disabled={bookmark.length <= 0} handleClick={clearBookmark}>
          Bookmarks
        </ListHeader>
        {bookmark.length > 0 && (
          <SearchList>
            {bookmark.map((sense) => {
              return (
                <SearchListItem
                  lemma={sense.lemma}
                  pos={sense.pos}
                  offset={sense.offset}
                  def={sense.def}
                  key={sense.offset}
                />
              );
            })}
          </SearchList>
        )}
        {bookmark.length <= 0 && (
          <ListMessage>
            List empty. Bookmarked words will show up here.
          </ListMessage>
        )}
      </MainLayout>
    </>
  );
}
