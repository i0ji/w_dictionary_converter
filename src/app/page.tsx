<<<<<<< HEAD
import FileUploader from "components/FileUploader/FileUpLoader";
=======
import FileUploader from "@/components/FileUpLoader/FileUpLoader";
>>>>>>> deploy

export default function Home() {
  
  //CONSOLE
  console.log(process.env.NODE_ENV);

  return (
    <main>
      <FileUploader />
    </main>
  );
}
