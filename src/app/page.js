import PersonalCard from "@/components/personalCard";
import {
  PersonalInformation,
  ServiceInformation,
  PostInformation,
} from "./constants";
import Main from "@/layouts/globalMain";
import StatCard from "@/components/statCard";
import ServiceTitle from "@/components/serviceTitle";
import ServiceCard from "@/components/serviceCard";
import { applyPostFilter, pagenation } from "@/lib/postsParser";
import PostList from "@/components/postList";

export default function Home() {
  let totalPosts = applyPostFilter();
  let posts = pagenation(totalPosts, PostInformation.viewCount);
  return (
    <Main className="mx-auto my-8 max-w-screen-lg">
      <section className="mx-auto grid grid-cols-1 gap-8 rounded-xl border border-slate-700 bg-slate-700/10 px-4 py-4 sm:px-8">
        <PersonalCard
          name={PersonalInformation.name}
          occupation={PersonalInformation.occupation}
          responsibility={PersonalInformation.responsibility}
          company={PersonalInformation.company}
          description={PersonalInformation.description}
          personalImage={PersonalInformation.personalImage}
          lineClamp={true}
        />
        <section className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <StatCard value="10+" title="Projects" />
            <StatCard value="5+" title="Nuget Packages" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
      <section className="mx-auto mt-16 grid gap-8 rounded-xl border border-slate-700 bg-slate-700/10 px-4 py-4 sm:px-8 lg:grid-cols-3">
        <ServiceTitle
          className="m-auto line-clamp-[7] min-w-0 lg:mb-8"
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
        </div>
      </section>
      <section className="mx-auto mt-16 rounded-xl border border-slate-700 bg-slate-700/10 px-4 py-4 sm:px-8">
        <span className="text-2xl font-bold text-slate-200/90">
          Recent Posts
        </span>
        <PostList className="mt-8" posts={posts}></PostList>
      </section>
    </Main>
  );
}
