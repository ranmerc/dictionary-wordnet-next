import Head from 'next/head';
import ListHeader from '../components/ListHeader';
import SearchList from '../components/SearchList';
import MainLayout from '../components/MainLayout';
import ListMessage from '../components/ListMessage';
import SearchListItem from '../components/SearchListItem';
import { useRecentContext } from '../context/RecentContext';

export default function Recent() {
  const { recent, setRecent } = useRecentContext();

  const clearRecents = () => {
    setRecent({
      type: 'CLEAR',
    });
  };

  return (
    <>
      <Head>
        <title>Recent</title>
        <meta name="description" content="Recent page for the dictionary app" />
      </Head>
      <MainLayout>
        <ListHeader disabled={recent.length <= 0} handleClick={clearRecents}>
          Recent
        </ListHeader>
        {recent.length > 0 && (
          <SearchList>
            {recent.map((sense) => {
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
        {recent.length <= 0 && (
          <ListMessage>List empty. Recent words will show up here.</ListMessage>
        )}
      </MainLayout>
    </>
  );
}
