import Navbar from '@/components/Navbar';
import '@/styles/globals.css'

import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';

function App({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
