import { ExperienceInformation, MetaInformation } from "@/app/constants";
import ProjectTimelineList from "@/components/projectTimelineList";
import Main from "@/layouts/globalMain";
import { totalProjects } from "@/lib/projectParser";

export const metadata = {
  title: `Projects`,
  description: "Projects of " + MetaInformation.author,
  openGraph: {
    title: "Projects",
    description: "Projects of " + MetaInformation.author,
    url: MetaInformation.baseUrl + "/projects",
  },
};

export default function Projects() {
  return (
    <Main className="max-w-screen-lg mx-auto my-8">
      <ProjectTimelineList
        timelines={ExperienceInformation}
        projects={totalProjects}
      ></ProjectTimelineList>
    </Main>
  );
}
