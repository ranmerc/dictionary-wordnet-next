import Link from 'next/link';
import DefineSection from './DefineSection';
import { useThemeContext } from '../context/ThemeContext';

export default function RelatedSection({ ptrs }) {
  const { theme } = useThemeContext();

  /* 
    convert array of ptrs to a accumulated 
    object having sym as key
  */
  ptrs = ptrs.reduce((a, b) => {
    a[b.sym] = (a[b.sym] || []).concat(b);
    return a;
  }, {});

  return (
    <>
      <DefineSection heading="Related">
        <div>
          {Object.keys(ptrs).map((sym) => {
            return (
              <div
                key={sym}
                // inline styling because of div-soup
                style={{
                  display: 'grid',
                  gridAutoFlow: 'column',
                  justifyContent: 'start',
                }}
              >
                <span>{sym}</span>
                <div>
                  {ptrs[sym].map((ptr) => {
                    return (
                      <Link
                        key={ptr.offset}
                        href={`/define?offset=${ptr.offset}&pos=${ptr.pos}`}
                      >
                        <a>{ptr.lemma}</a>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <style jsx>{`
          span {
            font-weight: 800;
            font-size: 1.4rem;
            width: 3.5ch;
          }
          // ugly selector
          div > div > div {
            display: flex;
            column-gap: 1rem;
            row-gap: 0.3rem;
            flex-wrap: wrap;
          }
          a {
            font-size: 1.1rem;
            font-weight: 400;
          }
        `}</style>
        <style jsx>{`
          a {
            color: ${theme.gray[11]};
          }
          span {
            color: ${theme.color[10]};
          }
        `}</style>
      </DefineSection>
    </>
  );
}
