import Head from 'next/head';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SearchList from '../components/SearchList';
import SearchListItem from '../components/SearchListItem';

export default function search() {
  const [query, setQuery] = useState('bow');

  return (
    <>
      <Head>
        <title>Search</title>
        <meta name="description" content="Search page for the dictionary app" />
      </Head>
      <main>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <SearchBar query={query} setQuery={setQuery} />
        </form>
        <section>
          <SearchList>
            <SearchListItem />
            <SearchListItem />
            <SearchListItem />
            <SearchListItem />
            <SearchListItem />
            <SearchListItem />
            <SearchListItem />
          </SearchList>
        </section>
        <style jsx>{`
          main {
            display: grid;
            row-gap: 2.2rem;
          }
        `}</style>
      </main>
    </>
  );
}
