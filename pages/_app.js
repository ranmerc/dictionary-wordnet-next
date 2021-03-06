import Head from 'next/head';
import '../styles/global.css';
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Layout from '../components/Layout';
import { IdProvider } from '@radix-ui/react-id';
import LoadingBar from '../components/LoadingBar';
import { ThemeProvider } from '../context/ThemeContext';
import { QueryProvider } from '../context/QueryContext';
import { SenseProvider } from '../context/SenseContext';
import { RecentProvider } from '../context/RecentContext';
import { BookmarkProvider } from '../context/BookmarkContext';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.addEventListener('load', () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('/sw.js', { scope: './' })
          .then(function () {
            console.log('ServiceWorker succesfully registered');
          })
          .catch(function (err) {
            console.log('ServiceWorker registration failed: ', err);
          });
      } else {
        console.log('Service workers are not supported.');
      }
    });
  }, []);

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
                  {/* show loading bar when loading */}
                  <LoadingBar />
                  {/* custom layout skeleton for the app */}
                  <Layout>
                    {/* nav bar present on every page */}
                    <NavBar />
                    <Component {...pageProps} />
                  </Layout>
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
