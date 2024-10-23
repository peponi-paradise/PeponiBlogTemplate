import Image from "next/image";

const defaultClassName =
  "max-h-64 grid grid-flow-row auto-rows-fr gap-4 break-words bg-gradient-to-br from-slate-800 from-30% to-slate-700 border border-sky-700 rounded-xl px-4 py-4 sm:px-8 ";

export default function ServiceCard({
  className = "",
  thumbnail,
  alt = "",
  title = "",
  description = "",
}) {
  return (
    <div className={defaultClassName + className}>
      <div className="relative h-[auto] w-full">
        <Image
          className="object-cover object-center rounded-xl"
          src={thumbnail}
          alt={alt}
          fill
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl font-bold text-slate-200/90">{title}</p>
        <p className="text-sm line-clamp-3">{description}</p>
      </div>
    </div>
  );
}
