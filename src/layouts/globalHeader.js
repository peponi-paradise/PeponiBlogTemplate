"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import favicon from "@/assets/svgs/favicon.svg";
import searchIcon from "@/assets/svgs/searchIcon.svg";
import searchIconHover from "@/assets/svgs/searchIconHover.svg";

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
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      type="button"
      onClick={search}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      className="border-l border-slate-700 px-1"
    >
      <Image
        src={isHover ? searchIconHover : searchIcon}
        alt="Search"
        className="inline-block size-4"
      ></Image>
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
        <span className="hidden text-center text-xl font-bold hover:text-sky-400 sm:inline-block">
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
          <Link
            href="/posts?folderPath=all"
            className="my-auto border-r border-slate-700 pr-2 hover:text-sky-400"
          >
            Posts
          </Link>
          <Link
            href="/projects"
            className="my-auto border-r border-slate-700 px-2 hover:text-sky-400"
          >
            Projects
          </Link>
          <Link href="/about" className="my-auto pl-2 hover:text-sky-400">
            About
          </Link>
        </nav>
      </section>
    </header>
  );
}
