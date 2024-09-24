import Image from "next/image";
import "./_gradientBorder.css";

const defaultClassName =
  "gradient-border grid grid-cols-3 items-center gap-8 text-pretty border border-slate-700 px-8 py-4 hover:border-0 ";

export default function ServiceCard(props) {
  return (
    <div role="serviceCard" className={defaultClassName + props.className}>
      <Image
        src={props.imageSrc}
        alt={props.imageAlt}
        className="m-auto size-full"
      />
      <div className="col-span-2">
        <p className="mb-4 text-2xl font-bold text-slate-200/90">
          {props.title}
        </p>
        <p className="text-sm">{props.description}</p>
      </div>
    </div>
  );
}
