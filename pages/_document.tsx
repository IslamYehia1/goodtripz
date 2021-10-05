import Document, { Html, Head, Main, NextScript } from "next/document";
// import { DocumentContext } from "next/document";
class MyDocument extends Document {
    // static async getInitialProps(ctx: DocumentContext) {
    //     const initialProps = await Document.getInitialProps(ctx);
    //     return { ...initialProps };
    // }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <div id="modalRoot" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
