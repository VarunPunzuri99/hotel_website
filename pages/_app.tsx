import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   // Import Bootstrap JS on client side
  //   import('bootstrap/dist/js/bootstrap.min.js');
  // }, []);

  return <Component {...pageProps} />;
}