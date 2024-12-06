import FileUploader from "@/components/FileUpLoader/FileUpLoader";

export default function Home() {
  
  //CONSOLE
  console.log(process.env.NODE_ENV);

  return (
    <main>
      <FileUploader />
    </main>
  );
}
