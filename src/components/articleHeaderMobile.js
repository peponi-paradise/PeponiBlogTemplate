import * as Icons from "@/components/svgComponents";

import { Chip, Chips } from "./chip";

export default function ArticleHeaderMobile({
  className = "",
  title = "",
  author = "",
  date,
  minutesToRead = 1,
  category = "",
  tags = [],
}) {
  return (
    <section className={"text-center " + `${className}`}>
      <h1>{title}</h1>
      <p>
        <span>{author}</span>
        {" │ "}
        <span>
          {date.constructor == Date
            ? new Date(date).toLocaleDateString()
            : date}
        </span>
        {" │ "}
        <span className="inline-flex flex-row items-baseline">
          <Icons.Clock className="my-0 mr-1 size-3.5 fill-slate-400 self-center" />
          {minutesToRead}m
        </span>
      </p>
      <Chip
        className="px-1 mr-1 text-xs border rounded-full border-fuchsia-800/60 bg-fuchsia-900/40 text-fuchsia-400/75"
        content={category}
      />
      {tags.length > 0 ? (
        <Chips
          className="px-1 mr-1 text-xs border rounded-full border-blue-800/60 bg-blue-900/40 text-blue-400/75"
          contents={tags}
        ></Chips>
      ) : (
        <></>
      )}
    </section>
  );
}
