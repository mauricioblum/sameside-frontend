import React from 'react';

import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import AppProvider from '../hooks';
import '../components/Slider/slider.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <AppProvider>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  </AppProvider>
);

export default MyApp;
