import Image from "next/image";
import Counter from "./Components/Counter/page";

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl text-center mt-12 text-black dark:text-red-500">First Next Js</h1>
      <Counter></Counter>
      
    </div>
  );
}
