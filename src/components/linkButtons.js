"use client";

import Link from "next/link";

const textLinkClassName = "hover:text-sky-400 ";

const buttonLinkClassName =
  "z-10 block px-6 py-2 text-center border rounded-lg max-w-fit border-sky-700 bg-sky-400/10 text-slate-200/90 hover:border-sky-400 hover:bg-sky-400/20 ";

function TextLink({ className = "", href = "", text = "" }) {
  return (
    <Link className={textLinkClassName + className} href={href}>
      {text}
    </Link>
  );
}

function ButtonLink({ className = "", href = "", text = "" }) {
  return (
    <Link className={buttonLinkClassName + className} href={href}>
      {text}
    </Link>
  );
}

function SvgLink({ children, href = "", ariaLabel = "", ...props }) {
  return (
    <Link
      href={href}
      className="z-10 size-6"
      target="_blank"
      aria-label={ariaLabel}
      title={ariaLabel}
      {...props}
    >
      {children}
    </Link>
  );
}

export { TextLink, ButtonLink, SvgLink };
