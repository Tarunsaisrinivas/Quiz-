import Image from "next/image";
import QuizPage from "./Quiz/page";
import Form from "./Form/page";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-10 ">
    {/* <QuizPage /> */}
    <Form />
    </main>
  );
}
