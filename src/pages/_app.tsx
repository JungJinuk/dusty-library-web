import React from 'react';

import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import '../styles/main.css';
import { AppProps } from 'next/app';

// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp = ({ Component, pageProps }: AppProps) => {
  const firebaseConfig = {
    apiKey: 'AIzaSyApBU22G83mz-i6vJZ5VIlA0tKP4hujpBA',
    authDomain: 'dusty-library-web.firebaseapp.com',
    projectId: 'dusty-library-web',
    storageBucket: 'dusty-library-web.appspot.com',
    messagingSenderId: '863633770043',
    appId: '1:863633770043:web:e54fd631c7351b83acfe1e',
    measurementId: 'G-0T9DR54HWD',
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }

  return <Component {...pageProps} />;
};

export default MyApp;
