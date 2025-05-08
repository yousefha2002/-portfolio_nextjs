import Container from "@/components/ui/Container";
import { data } from "@/types/enums";

export default function Home() {
  return (
    <main>
      <Container className="my-10">
        <h3 className="mb-2">{data.headline}</h3>
        <h3>{data.description}</h3>
      </Container>
    </main>
  )
}