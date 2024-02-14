import Image from "next/image";
import executeQuery from "./lib/test";

export default function Home() {

  executeQuery();

  return (
    <main>
      <div className="text-9xl">Hola Animanga</div>
    </main>
  );
}
