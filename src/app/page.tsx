import { Briefcase, Folder, GraduationCap } from "lucide-react";
import Section from "@/components/sections";
import Image from "next/image";
import ItemCard from "@/components/ItemCard";
import AboutMe from "@/components/headers/AboutMe";
import {data} from "@/lib/data";

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between px-24 ">
      <div className=" bg-[url('/backg.jpg')] p-2 pb-0 rounded-xl w-full flex flex-col items-center justify-between gap-4">
      <AboutMe name={"Ankita"} role={"Software Engineer"} availability={"open to work"} location={"Bengaluru"} email={"ankitachaudhary3496@gmail.com"} image={"./Myphotuu.jpg"} resume={""} currentCompany={{
          name: "Accenture",
          role: "Associate",
          duration: "2"
        }}
       />
      <Section title="Projects" icon={<Folder />}>
      {data.projects.map((project)=>{
        return (
          <ItemCard 
          image={project.image}
          title={project.title}
          description={project.description}
          tags={project.tags}
          href={project.href}
          key={project.title}
          />
        );
      })}
      </Section>
      <Section title="Experience" icon={<Briefcase/>}>
        <ItemCard image="./accenturelogo.jpeg" title={"Accenture"} description={"Associate"} tags={["2yoe"]} href={"/Experience/accenture"}></ItemCard>
        <ItemCard image="./falkonrylogo.jpeg" title={"Falkonry"} description={"Software Engineering Intern"} tags={["2 months"]} href={"/Experience/falkonry"}></ItemCard>
      </Section>
      <Section title="Education" icon={<GraduationCap/>}>
        <ItemCard image="./iitglogo.png" title={"Indian Institute of Technology Guwahati"} description={"Bachelor of Technology in Mechanical Engineering"} tags={["4yoe"]} href={"/education/IIT-G"}></ItemCard>
      </Section>
      </div>
    </main>
  );
}
