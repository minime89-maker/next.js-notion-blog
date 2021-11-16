import 'tailwindcss/tailwind.css';
import '../style/global.css';
import { ThemeProvider } from 'next-themes';
import "prismjs/themes/prism-tomorrow.css";
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react'

Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());  

function MyApp({ Component, pageProps }) {

  // service worker
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <ThemeProvider attribute='class'>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
