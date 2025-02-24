import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Corrected link to include both Canela Text and Inconsolata */}
          <link 
            href="https://fonts.googleapis.com/css2?family=Lora&family=Inconsolata:wght@200;300;400;500&display=swap" 
            rel="stylesheet" 
          />
        </Head>
        <body>
          <Main />  {/* This is where the page's content will be rendered */}
          <NextScript />  {/* This renders the necessary scripts */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
