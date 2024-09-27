import Main from "@/layouts/globalMain";
import StatCard from "@/components/statCard";
import ServiceTitle from "@/components/serviceTitle";
import ServiceCard from "@/components/serviceCard";
import PersonalCard from "@/components/personalCard";
import {
  EducationInformation,
  ExperienceInformation,
  PersonalInformation,
  ServiceInformation,
  WorkStyleInformation,
} from "@/app/constants";
import RadarCharts from "@/components/apexCharts";
import TimelineList from "@/components/timelineList";

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
          <iframe
            className="lg:min-h-56"
            src="https://github-readme-activity-graph.vercel.app/graph?username=peponi-paradise&bg_color=transparent&hide_border=true&title_color=38bdf8&color=94a3b8&line=7dd3fc&point=38bdf8&days=30"
          ></iframe>
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
            imageSrc={PersonalInformation.personalImage}
            imageAlt="Sample image"
            title="My Service 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
          />
          <ServiceCard
            className="gradient-normal border-0"
            imageSrc={PersonalInformation.personalImage}
            imageAlt="Sample image"
            title="My Service 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
          />
          <ServiceCard
            className="gradient-normal border-0"
            imageSrc={PersonalInformation.personalImage}
            imageAlt="Sample image"
            title="My Service 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
          />
          <ServiceCard
            className="gradient-normal border-0"
            imageSrc={PersonalInformation.personalImage}
            imageAlt="Sample image"
            title="My Service 4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
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
      <section className="mx-auto mt-16 rounded-xl border border-slate-700 bg-slate-700/10 px-4 py-4 sm:px-8">
        <p className="text-2xl font-bold text-slate-200/90">Coding Skills</p>
      </section>
      <section className="mx-auto mt-16 rounded-xl border border-slate-700 bg-slate-700/10 px-4 py-4 sm:px-8">
        <p className="text-2xl font-bold text-slate-200/90">Knowledges</p>
      </section>
      <section className="mx-auto mt-16 rounded-xl border border-slate-700 bg-slate-700/10 px-4 py-4 sm:px-8">
        <p className="text-2xl font-bold text-slate-200/90">Language Skills</p>
      </section>
    </Main>
  );
}
