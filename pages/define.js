import Head from 'next/head';
import { useEffect } from 'react';
import errorEgg from '../utils/errorEgg';
import { getSense } from './api/getsense';
import deducePOS from '../utils/deducePOS';
import XRefSection from '../components/XRefSection';
import { useThemeContext } from '../context/ThemeContext';
import RelatedSection from '../components/RelatedSection';
import SimilarSection from '../components/SimilarSection';
import { useSenseContext } from '../context/SenseContext';
import { useRecentContext } from '../context/RecentContext';
import DefinitionSection from '../components/DefinitionSection';

export default function define({ sense, error }) {
  const { theme } = useThemeContext();
  const [_, setSense] = useSenseContext();
  const { setRecent } = useRecentContext();

  // error easter egg
  if (error) {
    console.error(error);
    sense = errorEgg;
  }

  useEffect(() => {
    if (!error) {
      // if no error set the current returned meaning
      setSense(sense);
      setRecent({
        type: 'ADD',
        value: sense,
      });
    } else {
      // else set easter egg
      setSense(errorEgg);
    }
  }, [sense]);

  return (
    <>
      <Head>
        <title>{`${sense.lemma} - Definition`}</title>
        <meta
          name="description"
          content="Definition page for the dictionary app"
        />
      </Head>
      <main>
        <h1>{sense.lemma}</h1>

        <div>{deducePOS(sense.pos)}</div>

        <DefinitionSection def={sense.def} exp={sense.exp} />

        <SimilarSection synonyms={sense.synonyms} />

        <RelatedSection ptrs={sense.ptrs} />

        <XRefSection lemma={sense.lemma} />

        <style jsx>{`
          main {
            display: grid;
            row-gap: 1rem;
            font-family: 'Inter', sans-serif;
            width: 100%;
            overflow-x: none;
          }

          h1 {
            font-size: 2.75rem;
            font-weight: 700;
            width: 100%;
            overflow-x: auto;
          }

          main > div {
            font-weight: 500;
            font-style: italic;
            font-size: 1.4rem;
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
        <style jsx>{`
          h1,
          main > div {
            color: ${theme.color[10]};
          }
        `}</style>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { offset, pos } = context.query;
  try {
    /*
      cannot call getsense api from here
      https://nextjs.org/docs/basic-features/data-fetching#:~:text=Note%3A%20You%20should%20not%20use%20fetch()%20to%20call%20an%20API%20route%20in%20getServerSideProps.
    */
    const sense = await getSense(offset, pos);
    return {
      props: {
        sense,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {
        error: e.message,
      },
    };
  }
}
