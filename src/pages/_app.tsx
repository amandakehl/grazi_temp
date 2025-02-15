import { AppProps } from 'next/app'
import HeaderComponent from '../components/Header';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderComponent />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
