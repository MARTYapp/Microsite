import '../styles/globals.css'; // ✅ correct relative path
// import React from 'react';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
