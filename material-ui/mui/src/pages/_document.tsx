import { Html, Head, Main, NextScript, DocumentProps, DocumentContext } from "next/document";
import { DocumentHeadTags, DocumentHeadTagsProps, documentGetInitialProps } from "@mui/material-nextjs/v14-pagesRouter"

// Crear un theme y traer el font
import theme, {roboto} from "@/theme";


export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang="es" className={roboto.className}>
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="emotion-insertion-point" content="" />
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
}
