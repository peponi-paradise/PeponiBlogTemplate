import Main from "@/layouts/globalMain";
import StatCard from "@/components/statCard";
import ServiceTitle from "@/components/serviceTitle";
import ServiceCard from "@/components/serviceCard";
import PersonalCard from "@/components/personalCard";
import {
  MetaInformation,
  EducationInformation,
  ExperienceInformation,
  PersonalInformation,
  ServiceInformation,
  WorkStyleInformation,
} from "@/app/constants";
import RadarCharts from "@/components/apexCharts";
import TimelineList from "@/components/timelineList";
import ProgressBar from "@/components/progressBar";
import KnowledgeBadge from "@/components/knowledgeBadge";
import Jeje from "../../../public/services/jeje1.jpg";
import Jeje2 from "../../../public/services/jeje2.jpg";
import Jeje3 from "../../../public/services/jeje3.jpg";
import Jeje4 from "../../../public/services/jeje4.jpg";
import ProjectCard from "@/components/projectCard";

export const metadata = {
  title: `About`,
  description: "About " + MetaInformation.author,
  openGraph: {
    title: "About",
    description: "About " + MetaInformation.author,
    url: MetaInformation.baseUrl + "/about",
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

export default function About() {
  return (
    <Main className="mx-auto my-8 max-w-screen-lg">
      <section className="mx-auto grid grid-cols-1 gap-8 rounded-xl border border-slate-700 bg-slate-700/10 px-4 py-4 sm:px-8 md:grid-cols-3">
        <PersonalCard
          className="my-auto"
          name={PersonalInformation.name}
          occupation={PersonalInformation.occupation}
          responsibility={PersonalInformation.responsibility}
          company={PersonalInformation.company}
          additionalInformation={PersonalInformation.additionalInformation}
          description={PersonalInformation.description}
        />
        <section className="flex flex-col gap-4 md:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            <StatCard
              className="gradient-normal border-0"
              value="5+"
              title="Years Experience"
            />
            <StatCard
              className="gradient-normal border-0"
              value="5+"
              title="Clients"
            />
            <StatCard
              className="gradient-normal border-0"
              value="10+"
              title="Projects"
            />
            <StatCard
              className="gradient-normal border-0"
              value="5+"
              title="Nuget Packages"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <iframe
              className="size-full"
              src="https://github-readme-stats.vercel.app/api?username=peponi-paradise&show_icons=true&theme=transparent&hide_border=true&hide_rank=true&title_color=38bdf8&text_color=94a3b8"
            ></iframe>
            <iframe
              className="size-full"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=peponi-paradise&layout=compact&theme=transparent&hide_border=true&title_color=38bdf8&text_color=94a3b8"
            ></iframe>
          </div>
          <iframe
            className="lg:min-h-56"
            src="https://github-readme-activity-graph.vercel.app/graph?username=peponi-paradise&bg_color=transparent&hide_border=true&title_color=38bdf8&color=94a3b8&line=7dd3fc&point=38bdf8&days=30"
          ></iframe>
        </section>
      </section>
      <section className="mx-auto mt-16 grid grid-cols-1 gap-8 rounded-xl border border-slate-700 bg-slate-700/10 px-4 py-4 sm:px-8 lg:grid-cols-3">
        <ServiceTitle
          className="my-auto"
          title={ServiceInformation.title}
          description={ServiceInformation.description}
        />
        <div className="grid gap-4 md:col-span-2 md:grid-cols-2">
          <ServiceCard
            className="gradient-normal border-0"
            imageSrc={Jeje}
            imageAlt="My cat, Jeje"
            title="My Service 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
          />
          <ServiceCard
            className="gradient-normal border-0"
            imageSrc={Jeje2}
            imageAlt="My cat, Jeje"
            title="My Service 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
          />
          <ServiceCard
            className="gradient-normal border-0"
            imageSrc={Jeje3}
            imageAlt="My cat, Jeje"
            title="My Service 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
          />
          <ServiceCard
            className="gradient-normal border-0"
            imageSrc={Jeje4}
            imageAlt="My cat, Jeje"
            title="My Service 4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
          />
        </div>
      </section>
      <section className="mx-auto mt-16 rounded-xl border border-slate-700 bg-slate-700/10 px-4 py-4 sm:px-8">
        <p className="mb-4 text-2xl font-bold text-slate-200/90">Projects</p>
        <div className="flex flex-wrap gap-4">
          <ProjectCard
            title="My Project 1"
            company="Company 1"
            date="2018.08 - 2020.02"
            description="Sample description for My Project 1"
            thumbnail="/projects/Company 1/jeje5.jpg"
            alt="Jeje"
          />
          <ProjectCard
            title="My Project 2"
            company="Company 2"
            date="2018.08 - 2020.02"
            description="Sample description for My Project 2"
            thumbnail="/projects/Company 2/jeje6.jpg"
            alt="Jeje"
          />
          <ProjectCard
            title="My Project 3"
            company="Company 3"
            date="2018.08 - 2020.02"
            description="Sample description for My Project 3"
            thumbnail="/projects/Company 3/jeje7.jpg"
            alt="Jeje"
          />
          <ProjectCard
            title="My Project 4"
            company="Company 3"
            date="2018.08 - 2020.02"
            description="Sample description for My Project 4"
            thumbnail="/projects/Company 3/jeje8.jpg"
            alt="Jeje"
          />
        </div>
      </section>
      <section className="mx-auto mt-16 rounded-xl border border-slate-700 bg-slate-700/10 px-4 py-4 sm:px-8">
        <p className="text-2xl font-bold text-slate-200/90">
          {WorkStyleInformation.title}
        </p>
        <RadarCharts
          series={WorkStyleInformation.chartSeries}
          options={WorkStyleInformation.chartOption}
        />
        <p className="whitespace-pre-line">
          {WorkStyleInformation.description}
        </p>
      </section>
      <section className="mx-auto mt-16 rounded-xl border border-slate-700 bg-slate-700/10 px-4 py-4 sm:px-8">
        <p className="text-2xl font-bold text-slate-200/90">Experience</p>
        <TimelineList className="ml-2 mt-4" timelines={ExperienceInformation} />
      </section>
      <section className="mx-auto mt-16 rounded-xl border border-slate-700 bg-slate-700/10 px-4 py-4 sm:px-8">
        <p className="text-2xl font-bold text-slate-200/90">Education</p>
        <TimelineList className="ml-2 mt-4" timelines={EducationInformation} />
      </section>
      <section className="mx-auto mt-16 rounded-xl border border-slate-700 bg-slate-700/10 px-4 py-4 text-slate-200/90 sm:px-8">
        <p className="text-2xl font-bold">Top Skills</p>
        <div className="mt-4">
          <p>Skill 1</p>
          <ProgressBar className="mt-2" progress="w-[95%]"></ProgressBar>
        </div>
        <div className="mt-4">
          <p>Skill 2</p>
          <ProgressBar className="mt-2" progress="w-[80%]"></ProgressBar>
        </div>
        <div className="mt-4">
          <p>Skill 3</p>
          <ProgressBar className="mt-2" progress="w-[50%]"></ProgressBar>
        </div>
      </section>
      <section className="mx-auto mt-16 rounded-xl border border-slate-700 bg-slate-700/10 px-4 py-4 sm:px-8">
        <p className="text-2xl font-bold text-slate-200/90">Knowledges</p>
        <div className="mt-4 flex flex-wrap gap-4">
          <KnowledgeBadge name="Next.js" />
          <KnowledgeBadge name="React" />
          <KnowledgeBadge name="JavaScript" />
          <KnowledgeBadge name="HTML5" />
          <KnowledgeBadge name="CSS3" />
          <KnowledgeBadge name="TailwindCSS" />
          <KnowledgeBadge name="ESLint" />
          <KnowledgeBadge name="C#" />
          <KnowledgeBadge name=".NET" />
          <KnowledgeBadge name=".NET framework" />
          <KnowledgeBadge name="ASP.NET" />
          <KnowledgeBadge name="WinForms" />
          <KnowledgeBadge name="WPF" />
          <KnowledgeBadge name="OpenCVSharp" />
          <KnowledgeBadge name="Python" />
          <KnowledgeBadge name="NumPy" />
          <KnowledgeBadge name="pandas" />
          <KnowledgeBadge name="scikit-learn" />
          <KnowledgeBadge name="ONNX" />
          <KnowledgeBadge name="PyQt" />
          <KnowledgeBadge name="Modbus" />
          <KnowledgeBadge name="EtherCAT" />
          <KnowledgeBadge name="RestAPI" />
          <KnowledgeBadge name="gRPC" />
          <KnowledgeBadge name="JSON" />
          <KnowledgeBadge name="Xml" />
          <KnowledgeBadge name="Yaml" />
          <KnowledgeBadge name="Markdown" />
          <KnowledgeBadge name="MDX" />
          <KnowledgeBadge name="KaTeX" />
          <KnowledgeBadge name="PlantUml" />
          <KnowledgeBadge name="Visual Studio" />
          <KnowledgeBadge name="Visual Studio Code" />
          <KnowledgeBadge name="Sublime Text" />
          <KnowledgeBadge name="NuGet" />
          <KnowledgeBadge name="NSIS" />
          <KnowledgeBadge name="Git" />
          <KnowledgeBadge name="GitHub" />
          <KnowledgeBadge name="GitKraken" />
          <KnowledgeBadge name="Notion" />
          <KnowledgeBadge name="Figma" />
          <KnowledgeBadge name="diagrams.net" />
        </div>
      </section>
      <section className="mx-auto mt-16 rounded-xl border border-slate-700 bg-slate-700/10 px-4 py-4 sm:px-8">
        <p className="text-2xl font-bold text-slate-200/90">Language Skills</p>
        <div className="mt-4">
          <div className="flex justify-between">
            <p className="text-slate-200/90">Skill 1</p>
            <p className="self-center text-xs">Description 1</p>
          </div>
          <ProgressBar className="mt-2" progress="w-[95%]"></ProgressBar>
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <p className="text-slate-200/90">Skill 2</p>
            <p className="self-center text-xs">Description 2</p>
          </div>
          <ProgressBar className="mt-2" progress="w-[80%]"></ProgressBar>
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <p className="text-slate-200/90">Skill 3</p>
            <p className="self-center text-xs">Description 3</p>
          </div>
          <ProgressBar className="mt-2" progress="w-[50%]"></ProgressBar>
        </div>
      </section>
    </Main>
  );
}
