import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
          <link href="http://fonts.cdnfonts.com/css/fertigo" rel="stylesheet"></link>
          <link rel="preconnect" href="http://fonts.cdnfonts.com"></link>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" rel="stylesheet"></link>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument