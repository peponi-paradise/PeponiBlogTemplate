export default function TimelineListItem(props) {
  return (
    <li className={props.className}>
      <p className="font-bold text-slate-200/90">{props.title}</p>
      <p className="mb-1 text-xs">{props.dateTime}</p>
      <p className="line-clamp-4">{props.description}</p>
    </li>
  );
}
