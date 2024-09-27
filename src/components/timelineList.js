import TimelineListItem from "./timelineListItem";

export default function TimelineList(props) {
  return (
    <ul className={"list-disc border-l border-slate-700 " + props.className}>
      {props.timelines.map((timelineItem) => (
        <TimelineListItem
          className="mb-4 ml-3.5 marker:text-sky-400 last:mb-0"
          key={timelineItem.title}
          title={timelineItem.title}
          dateTime={timelineItem.dateTime}
          description={timelineItem.description}
        />
      ))}
    </ul>
  );
}
