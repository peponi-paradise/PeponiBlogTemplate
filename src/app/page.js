import PersonalCard from "@/components/personalCard";
import { PersonalInformation } from "./constants";
import Main from "@/layouts/globalMain";
import StatCard from "@/components/statCard";

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
    </Main>
  );
}
