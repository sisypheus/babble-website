import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class _Document extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    const mantine = createGetInitialProps(); 
    return { ...initialProps, ...mantine };
  }
  render() {
    return (
      <Html>
        <Head />
        <body>
          <script>0</script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
