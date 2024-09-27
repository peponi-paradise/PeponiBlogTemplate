import Image from "next/image";
import "./_gradientBorder.css";

const defaultClassName =
  "my-auto grid grid-cols-3 items-center gap-4 break-words bg-gradient-to-br from-slate-800 from-30% to-slate-700 border border-slate-700 px-4 py-4 sm:px-8 ";

export default function ServiceCard(props) {
  return (
    <div role="serviceCard" className={defaultClassName + props.className}>
      <Image
        src={props.imageSrc}
        alt={props.imageAlt}
        className="m-auto size-full max-h-16 max-w-16"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkF9eqBwABXgDR9lkLFAAAAABJRU5ErkJggg=="
      />
      <p className="col-span-2 text-xl font-bold text-slate-200/90">
        {props.title}
      </p>
      <p className="col-span-2 col-start-2 line-clamp-4 self-start text-sm">
        {props.description}
      </p>
    </div>
  );
}
