import { useThemeContext } from '../context/ThemeContext';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

export default function NavBarItem({ route, svg }) {
  const router = useRouter();

  const { theme } = useThemeContext();
  return (
    <>
      <li>
        <Link href={`/${route}`}>
          <a>
            {svg}
            <div>{route}</div>
          </a>
        </Link>
      </li>
      <style jsx>{`
        a {
          text-decoration: none;
          // a > div
          text-transform: capitalize;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          text-align: center;
        }

        li {
          display: grid;
          padding: 0.5rem 0;
        }
      `}</style>
      <style jsx>{`
        a {
          // a > div
          color: ${theme.color[11]};
        }

        li {
          /* highlight current nav tab */
          background-color: ${router.pathname.substring(1) === route
            ? theme.color[4]
            : 'transparent'};
        }

        li:focus-within {
          /* highlight focus state */
          background-color: ${theme.color[3]};
        }
      `}</style>
    </>
  );
}
