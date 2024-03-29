import React from 'react';
import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document';
import {CssBaseline} from '@nextui-org/react';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: React.Children.toArray([initialProps.styles])
        };
    }

    render() {
        return (
            <Html lang="zh-hans">
                <Head>{CssBaseline.flush()}</Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}
