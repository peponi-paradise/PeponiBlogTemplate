import Image from "next/image";
import timer from "@/public/svgs/timer.svg";
import { Chip, Chips } from "./chip";

export default function ArticleHeaderMobile(props) {
  return (
    <section className={"text-center " + `${props.className}`}>
      <h1>{props.title}</h1>
      <p>
        <span>{props.author}</span>
        {" │ "}
        <span>{new Date(props.date).toLocaleDateString()}</span>
        {" │ "}
        <span className="inline-flex flex-row items-baseline">
          <Image
            src={timer}
            alt="Minutes to read"
            className="my-0 mr-1 size-3.5 self-center"
          ></Image>
          {props.minutesToRead}m
        </span>
      </p>
      <Chip
        className="mr-1 rounded-full border border-fuchsia-800/60 bg-fuchsia-900/40 px-1 text-xs text-fuchsia-400/75"
        content={props.category}
      />
      <Chips
        className="mr-1 rounded-full border border-blue-800/60 bg-blue-900/40 px-1 text-xs text-blue-400/75"
        contents={props.tags}
      ></Chips>
    </section>
  );
}
