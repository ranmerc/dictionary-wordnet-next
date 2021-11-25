import Head from 'next/head';
import '../styles/global.css';
import NavBar from '../components/NavBar';
import Layout from '../components/Layout';
import { IdProvider } from '@radix-ui/react-id';
import { ThemeProvider } from '../context/ThemeContext';
import { QueryProvider } from '../context/QueryContext';
import { SenseProvider } from '../context/SenseContext';
import { RecentProvider } from '../context/RecentContext';
import { BookmarkProvider } from '../context/BookmarkContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* from radix-ui for consistent ssr */}
      <IdProvider>
        {/* custom theme provider */}
        <ThemeProvider>
          {/* persistent query input between page navigation */}
          <QueryProvider>
            {/* access currently viewing defintion across pages */}
            <SenseProvider>
              {/* access bookmark list anywhere */}
              <BookmarkProvider>
                {/* access recent list anywhere */}
                <RecentProvider>
                  {/* custom layout skeleton for the app */}
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                  {/* nav bar present on every page */}
                  <NavBar />
                </RecentProvider>
              </BookmarkProvider>
            </SenseProvider>
          </QueryProvider>
        </ThemeProvider>
      </IdProvider>
    </>
  );
}

export default MyApp;
