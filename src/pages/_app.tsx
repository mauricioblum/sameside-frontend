import React from 'react';

import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import AppProvider from '../hooks';
import '../components/Slider/slider.css';
import 'react-toastify/dist/ReactToastify.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <AppProvider>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />
    </ThemeProvider>
  </AppProvider>
);

export default MyApp;
