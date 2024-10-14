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
    images: [
      {
        url: "./opengraph-image.png",
        width: 256,
        height: 256,
        type: "image/png",
        alt: "Favicon",
      },
    ],
  },
};

export default function Projects() {
  return (
    <Main className="mx-auto my-8 max-w-screen-lg">
      <ProjectTimelineList
        timelines={ExperienceInformation}
        projects={totalProjects}
      ></ProjectTimelineList>
    </Main>
  );
}
