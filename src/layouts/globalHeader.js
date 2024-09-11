"use client";

import Link from "next/link";
import Image from "next/image";
import favicon from "../public/icons/favicon.png";
import searchIcon from "../public/images/searchIcon.svg";

function handleKeyPress(event) {
  if (event.key === "Enter") {
    search();
  }
}

function search() {
  let title = document.getElementById("searchBar").value;
  location.href = `/posts?title=${title}`;
}

export default function Header() {
  return (
    <header className="flex flex-row text-slate-200/90 border-b border-slate-700 justify-between sticky top-0 backdrop-blur-md z-50">
      <Link href="/" className="flex flex-row py-4 px-8 gap-4">
        <Image
          src={favicon}
          alt="Favicon"
          className="size-6 inline-block mx-auto my-auto"
        ></Image>
        <span className="hidden text-xl font-bold text-center sm:inline-block">
          Peponi
        </span>
      </Link>
      <section className="flex flex-row gap-4 py-4 px-8 my-auto">
        <div className="hidden sm:inline-block">
          <input
            type="text"
            id="searchBar"
            placeholder="Search posts..."
            onKeyDown={handleKeyPress}
            className="bg-transparent text-sm max-w-40 px-2 py-0.5 border border-slate-700 rounded-l-md focus:outline-none"
          />
          <button
            type="button"
            onClick={search}
            className="border-solid border-t border-b border-r border-slate-700 px-1 rounded-tr-md rounded-br-md"
          >
            <Image
              src={searchIcon}
              alt="Search"
              className="size-4 inline-block"
            ></Image>{" "}
          </button>
        </div>
        <nav className="flex flex-row">
          <Link
            href="/posts?folderPath=all"
            className="border-r border-slate-700 pr-2 my-auto"
          >
            Posts
          </Link>
          <Link href="/about" className="pl-2 my-auto">
            About
          </Link>
        </nav>
      </section>
    </header>
  );
}
