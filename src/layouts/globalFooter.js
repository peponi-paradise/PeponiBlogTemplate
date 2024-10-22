"use client";

import { MetaInformation, SocialInformation } from "@/app/constants";
import { SvgLink } from "@/components/linkButtons";
import * as Icons from "@/components/svgComponents";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between border-t border-slate-700">
      <p className="px-8 py-4">
        ⓒ 2024. {MetaInformation.author} All rights reserved
      </p>
      <section className="flex flex-row items-center gap-4 px-8 py-4">
        <SvgLink href={SocialInformation.linkedIn} ariaLabel="LinkedIn">
          <Icons.LinkedIn className="hover:fill-sky-400" />
        </SvgLink>
        <SvgLink href={SocialInformation.github} ariaLabel="GitHub">
          <Icons.GitHub className="hover:fill-sky-400" />
        </SvgLink>
        <SvgLink href={SocialInformation.nuget} ariaLabel="Nuget">
          <Icons.Nuget className="hover:fill-sky-400" />
        </SvgLink>
      </section>
    </footer>
  );
}
