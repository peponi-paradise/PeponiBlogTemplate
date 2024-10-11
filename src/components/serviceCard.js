import Image from "next/image";

const defaultClassName =
  "max-h-64 grid grid-flow-row auto-rows-fr gap-4 break-words bg-gradient-to-br from-slate-800 from-30% to-slate-700 border border-sky-700 rounded-xl px-4 py-4 sm:px-8 ";

export default function ServiceCard(props) {
  return (
    <div className={defaultClassName + props.className}>
      <div className="relative h-[auto] w-full">
        <Image
          className="rounded-xl object-cover object-center"
          src={props.thumbnail}
          alt={props.alt}
          fill
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl font-bold text-slate-200/90">{props.title}</p>
        <p className="line-clamp-3 text-sm">{props.description}</p>
      </div>
    </div>
  );
}
