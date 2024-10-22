"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const textLinkClassName = "hover:text-sky-400 ";

const buttonLinkClassName =
  "z-10 block max-w-fit rounded-lg border border-sky-700 bg-sky-400/10 px-6 py-2 text-center text-slate-200/90 hover:border-sky-400 hover:bg-sky-400/20 ";

const svgLinkClassName = "z-10 size-6 ";

function TextLink(props) {
  return (
    <Link className={textLinkClassName + props.className} href={props.href}>
      {props.text}
    </Link>
  );
}

function ButtonLink(props) {
  return (
    <Link className={buttonLinkClassName + props.className} href={props.href}>
      {props.text}
    </Link>
  );
}

function SvgLink(props) {
  if (props.hoverSrc !== undefined && props.hoverSrc != "") {
    return SvgLinkWithHover(props);
  } else {
    return SvgLinkWithoutHover(props);
  }
}

function SvgLinkWithHover(props) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      href={props.href}
      className={svgLinkClassName + props.className}
      target="_blank"
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <Image src={isHover ? props.hoverSrc : props.src} alt={props.href} />
    </Link>
  );
}

function SvgLinkWithoutHover(props) {
  return (
    <Link
      href={props.href}
      className={svgLinkClassName + props.className}
      target="_blank"
    >
      <Image src={props.src} alt={props.href} />
    </Link>
  );
}

export { TextLink, ButtonLink, SvgLink };
