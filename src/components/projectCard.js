import Image from "next/image";
import Link from "next/link";

import "./_projectCard.css";

const defaultClassName =
  "grid grid-flow-row gap-4 break-words bg-gradient-to-br from-slate-800 from-30% to-slate-700 border border-sky-700 hover:border-sky-400 rounded-xl px-4 py-4 sm:px-8 ";
const withTextOption = "items-center ";
const withImageOption = "auto-rows-fr ";

export default function ProjectCard({
  className = "",
  slug = "",
  thumbnail,
  alt = "",
  title = "",
  description = "",
  company = "",
  dateFrom,
  dateTo,
}) {
  if (thumbnail == undefined) {
    return TextCard(
      className,
      slug,
      title,
      description,
      company,
      dateFrom,
      dateTo,
    );
  } else {
    return ImageCard(
      className,
      slug,
      thumbnail,
      alt,
      title,
      description,
      company,
      dateFrom,
      dateTo,
    );
  }
}

function TextCard(
  className,
  slug,
  title,
  description,
  company,
  dateFrom,
  dateTo,
) {
  return (
    <Link className="my-auto" href={`/projects/${slug}`}>
      <div className={defaultClassName + withTextOption + className}>
        <p className="text-xl font-bold titlePara text-slate-200/90">{title}</p>
        <p className="text-sm line-clamp-6">{description}</p>
        <div className="grid grid-cols-2">
          <p className="text-xs">{company}</p>
          <p className="text-xs text-right">{`${new Date(dateFrom).getFullYear()}.${new Date(dateFrom).getMonth() + 1} - ${dateTo !== undefined && dateTo.constructor == Date ? `${new Date(dateTo).getFullYear()}.${new Date(dateTo).getMonth() + 1}` : dateTo}`}</p>
        </div>
      </div>
    </Link>
  );
}

function ImageCard(
  className,
  slug,
  thumbnail,
  alt,
  title,
  description,
  company,
  dateFrom,
  dateTo,
) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className={defaultClassName + withImageOption + className}>
        <div className="relative h-[auto] w-full">
          <Image
            className="object-cover object-center rounded-xl"
            src={thumbnail}
            alt={alt}
            fill
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold titlePara text-slate-200/90">
            {title}
          </p>
          <p className="text-sm line-clamp-3">{description}</p>
          <div className="grid grid-cols-2">
            <p className="text-xs">{company}</p>
            <p className="text-xs text-right">{`${new Date(dateFrom).getFullYear()}.${new Date(dateFrom).getMonth() + 1} - ${dateTo !== undefined && dateTo.constructor == Date ? `${new Date(dateTo).getFullYear()}.${new Date(dateTo).getMonth() + 1}` : dateTo}`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
