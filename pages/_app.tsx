import 'tailwindcss/tailwind.css';
import '../style/global.css';
import { ThemeProvider } from 'next-themes';
import 'prismjs/themes/prism-tomorrow.css';
import Router from 'next/router';
import { AppProps } from 'next/app';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import ScrollToTop from '../components/ScrollToTop';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  // service worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(
          function (registration) {
            registration;
          },
          function (err) {
            err.message;
          }
        );
      });
    }
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <ScrollToTop />
    </ThemeProvider>
  );
};

export default MyApp;
