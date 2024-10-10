/* eslint-disable @next/next/no-img-element */
import "./_gradientBorder.css";

const withoutImage =
  "gradient-hover my-auto grid grid-cols-1 items-center gap-4 break-words bg-gradient-to-br from-slate-800 from-30% to-slate-700 border border-slate-700 px-4 py-4 sm:px-8 ";
const withImage =
  "gradient-hover my-auto grid grid-cols-2 items-center gap-4 break-words bg-gradient-to-br from-slate-800 from-30% to-slate-700 border border-slate-700 px-4 py-4 sm:px-8 ";

export default function ProjectCard(props) {
  if (props.thumbnail == undefined) {
    return (
      <div className={withoutImage + props.className}>
        <p className="text-xl font-bold text-slate-200/90">{props.title}</p>
        <div>
          <p className="text-xs">{props.company}</p>
          <p className="text-xs">{props.date}</p>
        </div>
        <p className="line-clamp-4 self-start text-sm">{props.description}</p>
      </div>
    );
  } else {
    return (
      <div className={withImage + props.className}>
        <img
          src={props.thumbnail}
          alt={props.alt}
          className="m-auto"
          loading="lazy"
        />
        <div className="grid grid-flow-row gap-4">
          <p className="text-xl font-bold text-slate-200/90">{props.title}</p>
          <div>
            <p className="text-xs">{props.company}</p>
            <p className="text-xs">{props.date}</p>
          </div>
          <p className="line-clamp-4 text-sm">{props.description}</p>
        </div>
      </div>
    );
  }
}
