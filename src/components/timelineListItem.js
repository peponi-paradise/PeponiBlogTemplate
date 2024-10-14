export default function TimelineListItem({ children, ...props }) {
  return (
    <li className={props.className}>
      <div className="absolute -start-1 mt-2 h-2 w-2 rounded-full bg-sky-400"></div>
      <p
        className={
          props.titleClass == undefined
            ? "font-bold text-slate-200/90"
            : `font-bold text-slate-200/90 ${props.titleClass}`
        }
      >
        {props.title}
      </p>
      <p className="mb-1 text-xs">{props.dateTime}</p>
      <p className="line-clamp-4">{props.description}</p>
      {children}
    </li>
  );
}
