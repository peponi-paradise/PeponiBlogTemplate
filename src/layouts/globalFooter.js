"use client";

import {
  GithubInformation,
  LinkedInInformation,
  MetaInformation,
} from "@/app/constants";
import github from "@/assets/svgs/github.svg";
import githubHover from "@/assets/svgs/githubHover.svg";
import linkedIn from "@/assets/svgs/linkedIn.svg";
import linkedInHover from "@/assets/svgs/linkedInHover.svg";
import { SvgLink } from "@/components/linkButtons";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between border-t border-slate-700">
      <p className="px-8 py-4">
        ⓒ 2024. {MetaInformation.author} All rights reserved
      </p>
      <section className="flex flex-row items-center gap-4 px-8 py-4">
        <SvgLink
          href={`https://github.com/${GithubInformation.userName}`}
          src={github}
          hoverSrc={githubHover}
        />
        <SvgLink
          href={LinkedInInformation.profileUrl}
          src={linkedIn}
          hoverSrc={linkedInHover}
        />
      </section>
    </footer>
  );
}
