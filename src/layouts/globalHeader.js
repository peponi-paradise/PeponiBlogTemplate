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
      className="border-l border-slate-700 px-1"
      title="Search button"
    >
      <Icons.Search className="inline-block size-4 hover:fill-sky-400" />
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
          className="mx-auto my-auto inline-block size-6"
        ></Image>
        <span className="titleSpan hidden text-center text-xl font-bold sm:inline-block">
          Peponi
        </span>
      </Link>
      <section className="my-auto flex flex-row gap-4 px-8 py-4">
        <div className="hidden rounded-md border border-slate-700 hover:border-sky-400 sm:inline-block">
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
            className="my-auto border-r border-slate-700 pr-2"
            href="/posts?category=all"
            text="Posts"
          />
          <TextLink
            className="my-auto border-r border-slate-700 px-2"
            href="/projects"
            text="Projects"
          />
          <TextLink className="my-auto pl-2" href="/about" text="About" />
        </nav>
      </section>
    </header>
  );
}
