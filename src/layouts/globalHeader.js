"use client";

import Link from "next/link";
import Image from "next/image";
import favicon from "../public/icons/favicon.png";

function handleKeyPress(event) {
  if (event.key === "Enter") {
    search();
  }
}

function search() {
  let title = document.getElementById("title").value;
  location.href = `/posts?title=${title}`;
}

export default function Header() {
  return (
    <header className="flex flex-row border-b border-slate-700 justify-between">
      <Link href="/" className="flex flex-row py-4 px-8 gap-4">
        <Image src={favicon} alt="Favicon" className="size-6 inline-block mx-auto my-auto"></Image>
        <span className="hidden text-xl font-bold text-center sm:inline-block">Peponi</span>
      </Link>
      <div className="flex flex-row my-2 mx-6 p-2 border border-slate-700 rounded-md">
        <input
          type="text"
          id="title"
          placeholder="Search posts..."
          onKeyDown={handleKeyPress}
          className="bg-transparent max-w-40 focus:outline-none"
        />
        <button
          onClick={search}
          className="border-solid border-2 border-sky-900 px-1 rounded-md"
        >
          Search
        </button>
      </div>
    </header>
  );
}
