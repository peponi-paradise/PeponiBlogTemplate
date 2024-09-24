import PersonalCard from "@/components/personalCard";
import { PersonalInformation, ServiceInformation } from "./constants";
import Main from "@/layouts/globalMain";
import StatCard from "@/components/statCard";
import ServiceTitle from "@/components/serviceTitle";
import ServiceCard from "@/components/serviceCard";
import Cat from "@/public/images/github.svg";

export default function Home() {
  return (
    <Main>
      <PersonalCard
        personalImage={PersonalInformation.personalImage}
        name={PersonalInformation.name}
        occupation={PersonalInformation.occupation}
        responsibility={PersonalInformation.responsibility}
        company={PersonalInformation.company}
        description={PersonalInformation.description}
      />
      <section className="mx-auto mt-4 flex flex-row gap-4">
        <StatCard className="basis-1/3" value="10+" title="Projects" />
        <StatCard className="basis-1/3" value="5+" title="Open Sources" />
        <StatCard
          className="basis-1/3"
          value="5+"
          title="Years of Experience"
        />
      </section>
      <ServiceTitle
        className="mt-16"
        title={ServiceInformation.title}
        description={ServiceInformation.description}
      />
      <section className="mx-auto mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <ServiceCard
          imageSrc={Cat}
          imageAlt="Sample image"
          title="My Service 1"
          description="My Service 1 description"
        />
        <ServiceCard
          imageSrc={PersonalInformation.personalImage}
          imageAlt="Sample image"
          title="My Service 2"
          description="My Service 2 description"
        />
        <ServiceCard
          imageSrc={PersonalInformation.personalImage}
          imageAlt="Sample image"
          title="My Service 3"
          description="My Service 3 description"
        />
        <ServiceCard
          imageSrc={PersonalInformation.personalImage}
          imageAlt="Sample image"
          title="My Service 4"
          description="My Service 4 description"
        />
      </section>
    </Main>
  );
}
