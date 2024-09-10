import Link from "next/link";
import Image from "next/image";
import { Chips } from "./chip";
import timer from "@/public/images/timer.svg";

export default function PostList(props) {
  return (
    <ul className={props.className}>
      {props.posts.map((post) => (
        <li key={post.title}>
          <article className="border border-slate-700 px-2 py-2">
            <Link href={`/posts/${post.folderPath}/${post.slug}`}>
              <div className="flex flex-row justify-between">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <div className="flex flex-row items-center">
                  <Image
                    src={timer}
                    alt="Minutes to read"
                    className="size-3.5 mr-1"
                  ></Image>
                  <span>{post.minutesToRead}m</span>
                </div>
              </div>
              <h2>{post.title}</h2>
              <div className="flex flex-row mb-2">
                <Chips
                  className="bg-purple-400/0.5 px-1 border border-indigo-500 rounded-lg mr-1"
                  contents={post.tags}
                ></Chips>
              </div>
              <p>{post.description}</p>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  );
}
