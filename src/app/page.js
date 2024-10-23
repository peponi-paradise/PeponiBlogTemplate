/* eslint-disable @next/next/no-img-element */
import GithubHeatMap from "@/components/githubHeatMap";
import { ButtonLink, SvgLink } from "@/components/linkButtons";
import PersonalCard from "@/components/personalCard";
import PostList from "@/components/postList";
import StatCard from "@/components/statCard";
import * as Icons from "@/components/svgComponents";
import Main from "@/layouts/globalMain";
import { applyPostFilter, pagenation } from "@/lib/postsParser";

import {
  PersonalInformation,
  PostInformation,
  SocialInformation,
} from "./constants";

export default async function Home() {
  let totalPosts = applyPostFilter();
  let posts = pagenation(totalPosts, PostInformation.viewCount);
  let response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${SocialInformation.githubUserName}?y=last`,
  );
  let githubContributionData = await response.json();
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
          descriptionLineClamp={true}
        >
          <section className="mt-4 flex flex-row items-center gap-4">
            <SvgLink href={SocialInformation.linkedIn} ariaLabel="LinkedIn">
              <Icons.LinkedIn className="hover:fill-sky-400" />
            </SvgLink>
            <SvgLink href={SocialInformation.github} ariaLabel="GitHub">
              <Icons.GitHub className="hover:fill-sky-400" />
            </SvgLink>
            <SvgLink href={SocialInformation.nuget} ariaLabel="NuGet">
              <Icons.NuGet className="hover:fill-sky-400" />
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
              alt="Github stats"
              className="m-auto"
              src={`https://github-readme-stats.vercel.app/api?username=${SocialInformation.githubUserName}&show_icons=true&theme=transparent&hide_border=true&hide_rank=true&title_color=38bdf8&text_color=94a3b8`}
            />
            <img
              loading="lazy"
              alt="Github used languages"
              className="m-auto"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${SocialInformation.githubUserName}&layout=compact&theme=transparent&hide_border=true&title_color=38bdf8&text_color=94a3b8`}
            />
          </div>
          <ButtonLink className="self-center" href="/about" text="Read More" />
        </section>
      </section>
      <section className="mx-auto mt-16 rounded-xl border border-slate-700 bg-slate-700/10 px-4 py-4 sm:px-8">
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
