import Head from "next/head";
import FileUpLoader from "components/FileUpLoader/FileUpLoader";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Text to Excel</title>
        <meta
          name="description"
          content="Upload a *.TXT file and export to *.DOCX"
        />
      </Head>
      <main>
        <h1>Загрузите текстовый файл</h1>
        <FileUpLoader />
      </main>
    </div>
  );
}
