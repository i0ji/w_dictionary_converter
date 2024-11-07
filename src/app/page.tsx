import Head from "next/head";
import FileUpLoader from "components/FileUpLoader/FileUpLoader";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Загрузите или ператащите *.TXT файл</h1>
        <FileUpLoader />
      </div>
    </main>
  );
}
