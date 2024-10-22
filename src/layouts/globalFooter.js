"use client";

import { MetaInformation, SocialInInformation } from "@/app/constants";
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
          href={SocialInInformation.githubUserName}
          src={github}
          hoverSrc={githubHover}
        />
        <SvgLink
          href={SocialInInformation.linkedIn}
          src={linkedIn}
          hoverSrc={linkedInHover}
        />
      </section>
    </footer>
  );
}
