import { MetaInformation } from "../constants";

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
  return <p>Hello, This is Projects</p>;
}
