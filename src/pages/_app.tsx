import { AppProps } from 'next/app'
import { useEffect } from 'react';
import HeaderComponent from '../components/Header';
import SpinnerComponent from '../components/Spinner';
import useLoaderStore from '../hooks/hooks';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const isLoading = useLoaderStore((state) => state.isLoading)

  return (
    <>
      { isLoading && <SpinnerComponent /> }
      <HeaderComponent />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
