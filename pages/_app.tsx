import "../styles/bootstrap.min.css";
import '../styles/index.css';
import type { AppProps } from 'next/app'
import { useEffect } from "react";
import "aos/dist/aos.css"



function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
