import ProjectCard from "./projectCard";
import TimelineListItem from "./timelineListItem";

export default function ProjectTimelineList(props) {
  return (
    <ul className={"relative border-s border-slate-700 " + props.className}>
      {props.timelines.map((timelineItem) => (
        <TimelineListItem
          className="mb-8 ml-4 last:mb-0"
          titleClass="text-xl mb-2"
          key={timelineItem.name}
          title={timelineItem.name}
          dateTime={timelineItem.dateTime}
          description={timelineItem.description}
        >
          {props.projects !== undefined && props.projects.length > 0 ? (
            <div className="flex flex-wrap">
              {props.projects.map((project) =>
                project.company == timelineItem.name ? (
                  <ProjectCard
                    className="m-4 max-w-96"
                    key={project.title}
                    slug={project.slug}
                    title={project.title}
                    company={project.company}
                    dateFrom={project.dateFrom}
                    dateTo={project.dateTo}
                    description={project.description}
                    thumbnail={project.thumbnail}
                    alt={project.alt}
                  />
                ) : (
                  ""
                ),
              )}
            </div>
          ) : (
            <></>
          )}
        </TimelineListItem>
      ))}
    </ul>
  );
}
