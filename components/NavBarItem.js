import Link from 'next/link';
import { useRouter } from 'next/router';
import { useThemeContext } from '../context/ThemeContext';

export default function NavBarItem({ route, svg, href, check }) {
  const router = useRouter();
  const { theme } = useThemeContext();

  return (
    <>
      <li>
        {/* check signifies whether the navbaritem is link or checkbox
          (as used in bookmark checkbox on /define)
         */}
        {!check && (
          <Link href={href || `/${route}`}>
            <a>
              {svg}
              <div>{route}</div>
            </a>
          </Link>
        )}
        {check && (
          <label>
            {svg}
            <input
              type="checkbox"
              checked={check.isCheck}
              onChange={check.handleCheckChange}
            />
            <div>{route}</div>
          </label>
        )}
      </li>
      <style jsx>{`
        input[type='checkbox'] {
          // https://www.sarasoueidan.com/blog/inclusively-hiding-and-styling-checkboxes-and-radio-buttons/
          position: absolute;
          opacity: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          cursor: pointer;
        }
        a,
        li > label {
          text-decoration: none;
          // a > div
          text-transform: capitalize;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          text-align: center;
        }

        li {
          display: grid;
          position: relative;
        }

        a {
          padding: 0.5rem 0;
        }
        /*
          divide nav into equal navitems
        */
        @media (min-width: 640px) {
          a,
          li > label {
            height: 100%;
            display: grid;
            align-content: center;
            justify-items: center;
            padding: 0 0.8rem;
          }

          li {
            height: 100%;
          }
        }
      `}</style>
      <style jsx>{`
        a,
        li > label {
          // a > div
          color: ${theme.color[11]};
        }

        li {
          /* highlight current nav tab */
          background-color: ${router.pathname.substring(1) === route
            ? theme.color[4]
            : 'transparent'};
        }

        li:hover {
          background-color: ${theme.color[2]};
        }

        li:focus-within {
          /* highlight focus state */
          background-color: ${theme.color[3]};
        }
      `}</style>
    </>
  );
}
