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
import Link from "next/link";

export default function Home() {
  let totalPosts = applyPostFilter();
  let posts = pagenation(totalPosts, PostInformation.viewCount);
  return (
    <Main className="mx-auto my-8 max-w-screen-lg">
      <section className="mx-auto grid grid-cols-1 gap-8 rounded-xl border border-slate-700 bg-slate-700/10 px-4 py-4 sm:px-8 md:grid-cols-3">
        <div className="my-auto flex flex-row justify-between md:flex-col">
          <PersonalCard
            className="line-clamp-[9] min-w-0 sm:mb-8"
            name={PersonalInformation.name}
            occupation={PersonalInformation.occupation}
            responsibility={PersonalInformation.responsibility}
            company={PersonalInformation.company}
            description={PersonalInformation.description}
          />
          <Link
            href="/about"
            className="mt-1.5 max-h-fit max-w-fit text-nowrap text-sm hover:text-sky-400 md:mt-0"
          >
            Read more →
          </Link>
        </div>
        <section className="flex flex-col gap-4 md:col-span-2">
          <div className="grid grid-cols-2 gap-4">
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
        <div className="my-auto flex flex-row justify-between lg:flex-col">
          <ServiceTitle
            className="line-clamp-[7] min-w-0 lg:mb-8"
            title={ServiceInformation.title}
            description={ServiceInformation.description}
          />
          <Link
            href="/about"
            className="mt-1.5 max-h-fit max-w-fit text-nowrap text-sm hover:text-sky-400 lg:mt-0"
          >
            Read more →
          </Link>
        </div>
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
        </div>
      </section>
      <section className="mx-auto mt-16 rounded-xl border border-slate-700 bg-slate-700/10 px-4 py-4 sm:px-8">
        <div className="flex flex-row items-center justify-between">
          <span className="text-2xl font-bold text-slate-200/90">
            Recent Posts
          </span>
          <Link
            href="/posts?folderPath=all"
            className="text-sm hover:text-sky-400"
          >
            Read more →
          </Link>
        </div>
        <PostList className="mt-8" posts={posts}></PostList>
      </section>
    </Main>
  );
}
