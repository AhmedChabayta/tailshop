import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class _Document extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-blue-50 text-black dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _Document;
