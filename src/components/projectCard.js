import Image from "next/image";
import Link from "next/link";
import "./_projectCard.css";

const defaultClassName =
  "grid grid-flow-row gap-4 break-words bg-gradient-to-br from-slate-800 from-30% to-slate-700 border border-sky-700 hover:border-sky-400 rounded-xl px-4 py-4 sm:px-8 ";
const withTextOption = "items-center ";
const withImageOption = "auto-rows-fr ";

export default function ProjectCard(props) {
  if (props.thumbnail == undefined) {
    return (
      <div className={defaultClassName + withTextOption + props.className}>
        <p className="text-xl font-bold text-slate-200/90">{props.title}</p>
        <p className="line-clamp-6 text-sm">{props.description}</p>
        <div className="grid grid-cols-2">
          <p className="text-xs">{props.company}</p>
          <p className="text-right text-xs">{`${new Date(props.dateFrom).getFullYear()}.${new Date(props.dateFrom).getMonth() + 1} - ${props.dateTo !== undefined && props.dateTo.constructor == Date ? `${new Date(props.dateTo).getFullYear()}.${new Date(props.dateTo).getMonth() + 1}` : props.dateTo}`}</p>
        </div>
      </div>
    );
  } else {
    return (
      <Link href={`/projects/${props.slug}`}>
        <div className={defaultClassName + withImageOption + props.className}>
          <div className="relative h-[auto] w-full">
            <Image
              className="rounded-xl object-cover object-center"
              src={props.thumbnail}
              alt={props.alt}
              fill
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="titlePara text-xl font-bold text-slate-200/90">
              {props.title}
            </p>
            <p className="line-clamp-3 text-sm">{props.description}</p>
            <div className="grid grid-cols-2">
              <p className="text-xs">{props.company}</p>
              <p className="text-right text-xs">{`${new Date(props.dateFrom).getFullYear()}.${new Date(props.dateFrom).getMonth() + 1} - ${props.dateTo !== undefined && props.dateTo.constructor == Date ? `${new Date(props.dateTo).getFullYear()}.${new Date(props.dateTo).getMonth() + 1}` : props.dateTo}`}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
