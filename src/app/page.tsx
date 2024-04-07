import { Folder } from "lucide-react";
import Section from "@/components/sections";
import Image from "next/image";
import ItemCard from "@/components/ItemCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Section title="Projects" icon={<Folder />}>
        <ItemCard  image="././public/nexthslogo" title={""} description={""} tags={[]} href={""}/>
      </Section>
    </main>
  );
}
