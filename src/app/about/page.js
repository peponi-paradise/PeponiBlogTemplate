/* eslint-disable @next/next/no-img-element */
import {
  EducationInformation,
  ExperienceInformation,
  MetaInformation,
  PersonalInformation,
  ServiceInformation,
  SocialInformation,
  WorkStyleInformation,
} from "@/app/constants";
import RadarCharts from "@/components/apexCharts";
import GithubHeatMap from "@/components/githubHeatMap";
import KnowledgeBadge from "@/components/knowledgeBadge";
import * as KnowledgeIcons from "@/components/knowledgeSvgComponents";
import { SvgLink } from "@/components/linkButtons";
import PersonalCard from "@/components/personalCard";
import ProgressBar from "@/components/progressBar";
import ProjectCard from "@/components/projectCard";
import ServiceCard from "@/components/serviceCard";
import ServiceTitle from "@/components/serviceTitle";
import StatCard from "@/components/statCard";
import * as Icons from "@/components/svgComponents";
import TimelineList from "@/components/timelineList";
import Main from "@/layouts/globalMain";
import { projectsPreview } from "@/lib/projectParser";

export const metadata = {
  title: `About`,
  description: "About " + MetaInformation.author,
  openGraph: {
    title: "About",
    description: "About " + MetaInformation.author,
    url: MetaInformation.baseUrl + "/about",
  },
};

export default async function About() {
  let response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${process.env.GITHUB_USERNAME}?y=last`,
  );
  let githubContributionData = await response.json();
  return (
    <Main className="max-w-screen-lg mx-auto my-8">
      <section className="grid grid-cols-1 gap-8 px-4 py-4 mx-auto border rounded-xl border-slate-700 bg-slate-700/10 sm:px-8">
        <PersonalCard
          className="my-auto"
          name={PersonalInformation.name}
          occupation={PersonalInformation.occupation}
          responsibility={PersonalInformation.responsibility}
          company={PersonalInformation.company}
          additionalInformation={PersonalInformation.additionalInformation}
          description={PersonalInformation.description}
          personalImage={PersonalInformation.personalImage}
        >
          <section className="flex flex-row items-center gap-4 mt-4">
            <SvgLink href={SocialInformation.linkedIn} ariaLabel="LinkedIn">
              <Icons.LinkedIn className="fill-slate-400 hover:fill-sky-400" />
            </SvgLink>
            <SvgLink href={SocialInformation.instagram} ariaLabel="Instagram">
              <Icons.Instagram className="fill-slate-400 hover:fill-sky-400" />
            </SvgLink>
            <SvgLink href={SocialInformation.github} ariaLabel="GitHub">
              <Icons.GitHub className="fill-slate-400 hover:fill-sky-400" />
            </SvgLink>
            <SvgLink href={SocialInformation.nuget} ariaLabel="NuGet">
              <Icons.NuGet className="fill-slate-400 hover:fill-sky-400" />
            </SvgLink>
          </section>
        </PersonalCard>
        <section className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <StatCard value="5+" title="Years Experience" />
            <StatCard value="10+" title="Projects" />
            <StatCard value="5+" title="Nuget Packages" />
            <StatCard value="5+" title="Clients" />
          </div>
          <GithubHeatMap githubData={githubContributionData} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <img
              loading="lazy"
              alt="Github stats"
              className="m-auto"
              src={`https://github-readme-stats.vercel.app/api?username=${process.env.GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&hide_rank=true&title_color=38bdf8&text_color=94a3b8`}
            />
            <img
              loading="lazy"
              alt="Github used languages"
              className="m-auto"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${process.env.GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=38bdf8&text_color=94a3b8`}
            />
          </div>
        </section>
      </section>
      <section className="grid gap-8 px-4 py-4 mx-auto mt-16 border rounded-xl border-slate-700 bg-slate-700/10 sm:px-8 lg:grid-cols-3">
        <ServiceTitle
          className="m-auto"
          title={ServiceInformation.title}
          description={ServiceInformation.description}
        />
        <div className="grid grid-flow-row gap-4 min-[480px]:grid-cols-2 lg:col-span-2">
          <ServiceCard
            thumbnail="/services/jeje1.jpg"
            alt="My cat, Jeje"
            title="My Service 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
          />
          <ServiceCard
            thumbnail="/services/jeje2.jpg"
            alt="My cat, Jeje"
            title="My Service 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
          />
          <ServiceCard
            thumbnail="/services/jeje3.jpg"
            alt="My cat, Jeje"
            title="My Service 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
          />
          <ServiceCard
            thumbnail="/services/jeje4.jpg"
            alt="My cat, Jeje"
            title="My Service 4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
          />
        </div>
      </section>
      <section className="px-4 py-4 mx-auto mt-16 border rounded-xl border-slate-700 bg-slate-700/10 sm:px-8">
        <p className="mb-4 text-2xl font-bold text-slate-200/90">Projects</p>
        <div className="grid grid-flow-row gap-4 min-[480px]:grid-cols-2">
          {projectsPreview.length > 0 ? (
            projectsPreview.map((project) => (
              <ProjectCard
                key={project.title}
                slug={project.slug}
                title={project.title}
                company={project.company}
                dateFrom={project.dateFrom}
                dateTo={project.dateTo}
                description={project.description}
                thumbnail={project.thumbnail}
                alt={project.alt}
              />
            ))
          ) : (
            <p>To be updated...</p>
          )}
        </div>
      </section>
      <section className="px-4 py-4 mx-auto mt-16 border rounded-xl border-slate-700 bg-slate-700/10 sm:px-8">
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
      <section className="px-4 py-4 mx-auto mt-16 border rounded-xl border-slate-700 bg-slate-700/10 sm:px-8">
        <p className="text-2xl font-bold text-slate-200/90">Experience</p>
        <TimelineList className="mt-4 ml-2" timelines={ExperienceInformation} />
      </section>
      <section className="px-4 py-4 mx-auto mt-16 border rounded-xl border-slate-700 bg-slate-700/10 sm:px-8">
        <p className="text-2xl font-bold text-slate-200/90">Education</p>
        <TimelineList className="mt-4 ml-2" timelines={EducationInformation} />
      </section>
      <section className="px-4 py-4 mx-auto mt-16 border rounded-xl border-slate-700 bg-slate-700/10 text-slate-200/90 sm:px-8">
        <p className="text-2xl font-bold">Top Skills</p>
        <div className="mt-4">
          <p>Skill 1</p>
          <ProgressBar className="mt-2" barClassName="w-[95%]" />
        </div>
        <div className="mt-4">
          <p>Skill 2</p>
          <ProgressBar className="mt-2" barClassName="w-[80%]" />
        </div>
        <div className="mt-4">
          <p>Skill 3</p>
          <ProgressBar className="mt-2" barClassName="w-[50%]" />
        </div>
      </section>
      <section className="px-4 py-4 mx-auto mt-16 border rounded-xl border-slate-700 bg-slate-700/10 sm:px-8">
        <p className="text-2xl font-bold text-slate-200/90">Knowledges</p>
        <div className="flex flex-wrap gap-4 mt-4">
          <KnowledgeBadge className="text-white bg-black" title="Next.js">
            <KnowledgeIcons.NextJs className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#61dafb]" title="React">
            <KnowledgeIcons.React className="fill-black" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#f7df1e]" title="JavaScript">
            <KnowledgeIcons.JavaScript className="fill-black" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#e34f26]" title="HTML5">
            <KnowledgeIcons.Html5 className="fill-black" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#1572b6]" title="CSS3">
            <KnowledgeIcons.Css3 className="fill-black" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#06b6d4]" title="TailwindCSS">
            <KnowledgeIcons.TailwindCss className="fill-black" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#4b32c3] text-white" title="ESLint">
            <KnowledgeIcons.EsLint className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#512bd4] text-white" title="C#">
            <KnowledgeIcons.CSharp className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#512bd4] text-white" title=".NET">
            <KnowledgeIcons.DotNet className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge
            className="bg-[#512bd4] text-white"
            title=".NET framework"
          >
            <KnowledgeIcons.DotNet className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#512bd4] text-white" title="ASP.NET">
            <KnowledgeIcons.DotNet className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#512bd4] text-white" title="WinForms">
            <KnowledgeIcons.DotNet className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#512bd4] text-white" title="WPF">
            <KnowledgeIcons.DotNet className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge
            className="bg-[#5c3ee8] text-white"
            title="OpenCVSharp"
          >
            <KnowledgeIcons.OpenCvSharp className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#3776ab] text-white" title="Python">
            <KnowledgeIcons.Python className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#013243] text-white" title="NumPy">
            <KnowledgeIcons.NumPy className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#150458] text-white" title="pandas">
            <KnowledgeIcons.Pandas className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#f7931e]" title="scikit-learn">
            <KnowledgeIcons.ScikitLearn className="fill-black" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#005ced] text-white" title="ONNX">
            <KnowledgeIcons.Onnx className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#41cd52]" title="PyQt">
            <KnowledgeIcons.PyQt className="fill-black" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#1192cf]" title="Modbus">
            <KnowledgeIcons.Modbus className="fill-black" />
          </KnowledgeBadge>
          <KnowledgeBadge className="text-white bg-black" title="EtherCAT">
            <KnowledgeIcons.EtherCat className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="text-white bg-black" title="RestAPI">
            <KnowledgeIcons.RestApi className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#244b5a] text-white" title="gRPC">
            <KnowledgeIcons.gRpc className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="text-white bg-black" title="JSON">
            <KnowledgeIcons.Json className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#005fad] text-white" title="Xml">
            <KnowledgeIcons.Xml className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#cb171e] text-white" title="Yaml">
            <KnowledgeIcons.Yaml className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="text-white bg-black" title="Markdown">
            <KnowledgeIcons.Markdown className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#1b1f24] text-white" title="MDX">
            <KnowledgeIcons.Mdx className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="text-white bg-black" title="KaTeX">
            <KnowledgeIcons.KaTeX className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="text-white bg-black" title="PlantUml">
            <KnowledgeIcons.PlantUml className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge
            className="bg-[#68217a] text-white"
            title="Visual Studio"
          >
            <KnowledgeIcons.VisualStudio className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#00bcf2]" title="Visual Studio Code">
            <KnowledgeIcons.VisualStudio className="fill-black" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#ff9800]" title="Sublime Text">
            <KnowledgeIcons.SublimeText className="fill-black" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#004880] text-white" title="NuGet">
            <KnowledgeIcons.NuGet className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#01b0f0]" title="NSIS">
            <KnowledgeIcons.Nsis className="fill-black" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#f05032]" title="Git">
            <KnowledgeIcons.Git className="fill-black" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#181717] text-white" title="GitHub">
            <KnowledgeIcons.GitHub className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#179287]" title="GitKraken">
            <KnowledgeIcons.GitKraken className="fill-black" />
          </KnowledgeBadge>
          <KnowledgeBadge className="text-white bg-black" title="Notion">
            <KnowledgeIcons.Notion className="fill-white" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#f24e1e]" title="Figma">
            <KnowledgeIcons.Figma className="fill-black" />
          </KnowledgeBadge>
          <KnowledgeBadge className="bg-[#f08705]" title="diagrams.net">
            <KnowledgeIcons.DiagramsDotNet className="fill-black" />
          </KnowledgeBadge>
        </div>
      </section>
      <section className="px-4 py-4 mx-auto mt-16 border rounded-xl border-slate-700 bg-slate-700/10 sm:px-8">
        <p className="text-2xl font-bold text-slate-200/90">Language Skills</p>
        <div className="mt-4">
          <div className="flex justify-between">
            <p className="text-slate-200/90">Skill 1</p>
            <p className="self-center text-xs">Description 1</p>
          </div>
          <ProgressBar className="mt-2" barClassName="w-[100%]" />
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <p className="text-slate-200/90">Skill 2</p>
            <p className="self-center text-xs">Description 2</p>
          </div>
          <ProgressBar className="mt-2" barClassName="w-[70%]" />
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <p className="text-slate-200/90">Skill 3</p>
            <p className="self-center text-xs">Description 3</p>
          </div>
          <ProgressBar className="mt-2" barClassName="w-[30%]" />
        </div>
      </section>
    </Main>
  );
}
