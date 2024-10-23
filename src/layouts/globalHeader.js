"use client";

import favicon from "@/assets/icons/favicon-apple.png";
import { TextLink } from "@/components/linkButtons";
import * as Icons from "@/components/svgComponents";
import Image from "next/image";
import Link from "next/link";

import "./_globalHeader.css";

function handleKeyPress(event) {
  if (event.key === "Enter") {
    search();
  }
}

function search() {
  let title = document.getElementById("searchBar").value;
  location.href = `/posts?title=${title}`;
}

function SearchButton() {
  return (
    <button
      type="button"
      onClick={search}
      className="px-1 border-l border-slate-700"
      title="Search button"
    >
      <Icons.Search className="inline-block size-4 fill-slate-400 hover:fill-sky-400" />
    </button>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex flex-row justify-between border-b border-slate-700 text-slate-200/90 backdrop-blur-md">
      <Link href="/" className="flex flex-row gap-4 px-8 py-4">
        <Image
          src={favicon}
          alt="Favicon"
          className="inline-block mx-auto my-auto size-6"
        ></Image>
        <span className="hidden text-xl font-bold text-center titleSpan sm:inline-block">
          Peponi
        </span>
      </Link>
      <section className="flex flex-row gap-4 px-8 py-4 my-auto">
        <div className="hidden border rounded-md border-slate-700 hover:border-sky-400 sm:inline-block">
          <input
            type="text"
            id="searchBar"
            placeholder="Search posts..."
            onKeyDown={handleKeyPress}
            className="max-w-40 bg-transparent px-2 py-0.5 text-sm text-sky-400 focus:outline-none"
          />
          <SearchButton />
        </div>
        <nav className="flex flex-row">
          <TextLink
            className="pr-2 my-auto border-r border-slate-700"
            href="/posts?category=all"
            text="Posts"
          />
          <TextLink
            className="px-2 my-auto border-r border-slate-700"
            href="/projects"
            text="Projects"
          />
          <TextLink className="pl-2 my-auto" href="/about" text="About" />
        </nav>
      </section>
    </header>
  );
}
