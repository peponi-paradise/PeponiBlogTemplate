import timer from "@/assets/svgs/timer.svg";
import Image from "next/image";

import { Chip, Chips } from "./chip";

export default function ArticleHeaderDesktop(props) {
  return (
    <section className={`${props.className}`}>
      <h1 className="mb-4">{props.title}</h1>
      <hr className="my-4" />
      <>
        <div className="my-1 flex flex-row justify-between">
          <span>
            {props.date.constructor == Date
              ? new Date(props.date).toLocaleDateString()
              : props.date}
          </span>
          <div className="flex flex-row items-center">
            <Image
              src={timer}
              alt="Minutes to read"
              className="my-0 mr-1 size-3.5"
            ></Image>
            <span>{props.minutesToRead}m</span>
          </div>
        </div>
        <p className="my-1">{props.author}</p>
      </>
      <hr className="my-4" />
      <div>
        <Chip
          className="rounded-full border border-fuchsia-800/60 bg-fuchsia-900/40 px-1 text-xs text-fuchsia-400/75"
          content={props.category}
        />
      </div>
      {props.tags !== undefined && props.tags.length > 0 ? (
        <Chips
          className="mr-1 rounded-full border border-blue-800/60 bg-blue-900/40 px-1 text-xs text-blue-400/75"
          contents={props.tags}
        ></Chips>
      ) : (
        <></>
      )}
    </section>
  );
}
