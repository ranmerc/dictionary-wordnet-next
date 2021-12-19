import Head from 'next/head';
import ListHeader from '../components/ListHeader';
import SearchList from '../components/SearchList';
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
      <main>
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
      </main>
      <style jsx>{`
        main {
          display: grid;
          row-gap: 2.2rem;
        }

        /*
          on bigger screens center content
        */
        @media (min-width: 640px) {
          main {
            display: flex;
            flex-direction: column;
            margin: 4rem auto 2rem;
            width: 70%;
          }
        }
      `}</style>
    </>
  );
}
