import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   // Get locale from Next.js i18n context (or default to 'en')
  //   const lang = ctx.lang || 'english'
  //   return { ...initialProps, lang }
  // }
  render() {
    // const { lang } = this.props
    const GTM_ID = "GTM-K3KBH6HM"
    // const dir = lang === 'arabic' ? 'rtl' : 'ltr'  // 'ar' for Arabic (standard code)
  return (
    <Html>
      <Head>
        {/* Facebook Pixel */}

        <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
   
      </Head>
      
      <body>
          {/* GTM Body noscript */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        
        {/* <Main />
        <NextScript /> */}
      </body>
    </Html>
  );
}
}


export default MyDocument