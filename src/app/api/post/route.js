/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { MetaInformation } from "@/app/constants";

export const runtime = "edge";

function Chip(props) {
  return <span tw={props.className}>{props.content}</span>;
}

export function GET(request) {
  let { searchParams } = new URL(request.url);
  let title = searchParams.get("title");
  let description = searchParams.get("description");
  let date = searchParams.get("date");
  let minutesToRead = searchParams.get("minutesToRead");
  let category = searchParams.get("category");
  let tags = searchParams.get("tags").split(",");

  return new ImageResponse(
    (
      <div tw="flex flex-col bg-slate-900 text-slate-400 w-[100%] h-[100%] items-center justify-center">
        <h2 tw="mb-2">{title}</h2>
        <p style={{ display: "block", lineClamp: 2, marginBottom: "16px" }}>
          {description}
        </p>
        <p tw="mb-8">
          <span tw="mr-1">{MetaInformation.author}</span>
          {" | "}
          <span tw="mx-1">{new Date(date).toLocaleDateString()}</span>
          {" | "}
          <span tw="flex flex-row items-baseline ml-1">
            <svg
              tw="my-0 mr-1 self-center"
              alt="Minutes to read"
              width="16"
              height="16"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 0C17.956 0 0 17.956 0 40C0 62.044 17.956 80 40 80C62.044 80 80 62.044 80 40C80 17.956 62.044 0 40 0ZM40 8C57.7205 8 72 22.2795 72 40C72 57.7205 57.7205 72 40 72C22.2795 72 8 57.7205 8 40C8 22.2795 22.2795 8 40 8ZM36 16V41.6562L53.1719 58.8281L58.8281 53.1719L44 38.3438V16H36Z"
                fill="#566376"
              />
            </svg>
            {minutesToRead}m
          </span>
        </p>
        <div tw="flex flex-row">
          <Chip
            className="mr-1 rounded-full border border-fuchsia-800/60 bg-fuchsia-900/40 px-1 text-xs text-fuchsia-400/75"
            content={category}
          />
          {tags.map((tag) => (
            <Chip
              key={tag}
              className="mr-1 rounded-full border border-blue-800/60 bg-blue-900/40 px-1 text-xs text-blue-400/75 last:mr-0"
              content={tag}
            />
          ))}
        </div>
      </div>
    ),
    {},
  );
}
