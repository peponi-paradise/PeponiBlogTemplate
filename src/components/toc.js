"use client";

import Link from "next/link";

export default function Toc({ className = "", toc = [] }) {
  return (
    <section className={className}>
      <p className="mb-2 text-xl font-bold text-slate-200/90">Contents</p>
      <ul>
        {toc.map((item) => (
          <li
            key={item.text}
            className={`ml-1.5 truncate border-l border-slate-700 hover:border-sky-400 ${item.padding == 0 ? "pl-4 pt-2 text-base first:pt-0" : "pl-8 pt-1 text-sm"}`}
          >
            <Link className="hover:text-sky-400" href={"#" + item.innerLink}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
