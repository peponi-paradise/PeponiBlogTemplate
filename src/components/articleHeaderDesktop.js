import * as Icons from "@/components/svgComponents";

import { Chip, Chips } from "./chip";

export default function ArticleHeaderDesktop({
  className = "",
  title = "",
  date,
  minutesToRead = 1,
  author = "",
  category = "",
  tags = [],
}) {
  return (
    <section className={`${className}`}>
      <h1 className="mb-4">{title}</h1>
      <hr className="my-4" />
      <>
        <div className="my-1 flex flex-row justify-between">
          <span>
            {date.constructor == Date
              ? new Date(date).toLocaleDateString()
              : date}
          </span>
          <div className="flex flex-row items-center">
            <Icons.Clock className="my-0 mr-1 size-3.5" />
            <span>{minutesToRead}m</span>
          </div>
        </div>
        <p className="my-1">{author}</p>
      </>
      <hr className="my-4" />
      <div>
        <Chip
          className="rounded-full border border-fuchsia-800/60 bg-fuchsia-900/40 px-1 text-xs text-fuchsia-400/75"
          content={category}
        />
      </div>
      {tags.length > 0 ? (
        <Chips
          className="mr-1 rounded-full border border-blue-800/60 bg-blue-900/40 px-1 text-xs text-blue-400/75"
          contents={tags}
        ></Chips>
      ) : (
        <></>
      )}
    </section>
  );
}
