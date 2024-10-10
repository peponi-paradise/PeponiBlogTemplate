"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import github from "@/assets/svgs/github.svg";
import githubHover from "@/assets/svgs/githubHover.svg";
import linkedIn from "@/assets/svgs/linkedIn.svg";
import linkedInHover from "@/assets/svgs/linkedInHover.svg";
import { MetaInformation } from "@/app/constants";

function LinkButton(props) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      href={props.url}
      className="size-6"
      target="_blank"
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <Image src={isHover ? props.hoverSrc : props.normalSrc} alt={props.url} />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between border-t border-slate-700">
      <p className="px-8 py-4">
        ⓒ 2024. {MetaInformation.author} All rights reserved
      </p>
      <section className="flex flex-row items-center gap-4 px-8 py-4">
        <LinkButton
          url="https://github.com"
          normalSrc={github}
          hoverSrc={githubHover}
        />
        <LinkButton
          url="https://www.linkedin.com"
          normalSrc={linkedIn}
          hoverSrc={linkedInHover}
        />
      </section>
    </footer>
  );
}
