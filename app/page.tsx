import { data } from "@/types/enums";

export default function Home() {
  return (
    <main>
      <div className="w-[80%] sm:w-[70%] lg:w-[50%] text-justify m-auto">
        <h3 className="mb-2">{data.headline}</h3>
        <h3>{data.description}</h3>
      </div>
    </main>
  )
}