import Document, { Html, Head, Main, NextScript } from 'next/document';
import rtlPlugin from 'stylis-plugin-rtl';
import { ServerStyles, createStylesServer } from '@mantine/next';

export default class _Document extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const stylesServer = createStylesServer({
      key: 'rtl',
      stylisPlugins: [rtlPlugin],
    });

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <ServerStyles html={initialProps.html} server={stylesServer} />
        </>
      ),
    };
  }

  render() {
    return (
      <Html dir="rtl" lang={this.props.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
