import TimelineListItem from "./timelineListItem";

export default function TimelineList({ className = "", timelines = [] }) {
  return (
    <ul className={"relative border-s border-slate-700 " + className}>
      {timelines.map((timelineItem) => (
        <TimelineListItem
          className="mb-4 ml-4 last:mb-0"
          key={timelineItem.name}
          title={timelineItem.name}
          dateTime={timelineItem.dateTime}
          description={timelineItem.description}
        />
      ))}
    </ul>
  );
}
