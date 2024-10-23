export default function TimelineListItem({
  children,
  className = "",
  titleClass = "",
  title = "",
  dateTime = "",
  description = "",
  ...props
}) {
  return (
    <li className={className} {...props}>
      <div className="absolute w-2 h-2 mt-2 rounded-full -start-1 bg-sky-400"></div>
      <p
        className={
          titleClass == ""
            ? "font-bold text-slate-200/90"
            : `font-bold text-slate-200/90 ${titleClass}`
        }
      >
        {title}
      </p>
      <p className="mb-1 text-xs">{dateTime}</p>
      <p className="line-clamp-4">{description}</p>
      {children}
    </li>
  );
}
