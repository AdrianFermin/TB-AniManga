import executeQuery from "./lib/test";
import { redirect } from "next/navigation";

export default async function Home() {

  const hola = await executeQuery();
  if(hola === undefined){
    redirect("/")
  }

  return (
    <main>
      <div className="text-9xl">
        {hola.map((user) => (
          <div key={user.id_prueba} className="text-5xl">
            {user.pruebacol}
          </div>
        ))}
      </div>
    </main>
  );
}
