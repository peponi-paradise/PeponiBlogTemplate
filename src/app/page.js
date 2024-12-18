/* eslint-disable @next/next/no-img-element */
import GithubHeatMap from "@/components/githubHeatMap";
import { ButtonLink, SvgLink } from "@/components/linkButtons";
import PersonalCard from "@/components/personalCard";
import PostList from "@/components/postList";
import StatCard from "@/components/statCard";
import * as Icons from "@/components/svgComponents";
import Main from "@/layouts/globalMain";
import { applyPostFilter, pagination } from "@/lib/postsParser";

import {
  PersonalInformation,
  PostInformation,
  SocialInformation,
} from "./constants";

export const dynamic = "force-dynamic";

export default async function Home() {
  let totalPosts = applyPostFilter();
  let posts = pagination(totalPosts, PostInformation.viewCount);
  let response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${process.env.GITHUB_USERNAME}?y=last`,
    { cache: "no-store" },
  );
  let githubContributionData = await response.json();
  return (
    <Main className="max-w-screen-lg mx-auto">
      <section className="grid grid-cols-1 gap-8 px-4 py-4 mx-auto border rounded-xl border-slate-700 bg-slate-700/10 sm:px-8">
        <PersonalCard
          name={PersonalInformation.name}
          occupation={PersonalInformation.occupation}
          responsibility={PersonalInformation.responsibility}
          company={PersonalInformation.company}
          description={PersonalInformation.description}
          personalImage={PersonalInformation.personalImage}
          descriptionLineClamp={true}
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
          <div className="grid grid-cols-2 gap-4">
            <StatCard value="10+" title="Projects" />
            <StatCard value="5+" title="Nuget Packages" />
          </div>
          <GithubHeatMap githubData={githubContributionData} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <img
              loading="lazy"
              alt="GitHub stats"
              className="m-auto"
              src={`https://github-readme-stats.vercel.app/api?username=${process.env.GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&hide_rank=true&title_color=38bdf8&text_color=94a3b8`}
            />
            <img
              loading="lazy"
              alt="GitHub used languages"
              className="m-auto"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${process.env.GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=38bdf8&text_color=94a3b8`}
            />
          </div>
          <ButtonLink className="self-center" href="/about" text="Read More" />
        </section>
      </section>
      <section className="px-4 py-4 mx-auto mt-16 border rounded-xl border-slate-700 bg-slate-700/10 sm:px-8">
        <span className="text-2xl font-bold text-slate-200/90">
          Recent Posts
        </span>
        <PostList className="mt-4" posts={posts}></PostList>
        <ButtonLink
          className="mx-auto mt-4"
          href="/posts?category=all"
          text="Read More"
        />
      </section>
    </Main>
  );
}
