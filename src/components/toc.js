"use client";

import Link from "next/link";

export default function Toc(props) {
  return (
    <section className={props.className}>
      <p className="mb-2 text-xl font-bold text-slate-200/90">Contents</p>
      <ul>
        {props.Toc.map((item) => (
          <li
            key={item.text}
            className={`ml-1.5 truncate border-l border-slate-700 hover:border-sky-400 pl-${4 + item.padding} `}
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
