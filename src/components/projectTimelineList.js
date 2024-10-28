import ProjectCard from "./projectCard";
import TimelineListItem from "./timelineListItem";

export default function ProjectTimelineList({
  className = "",
  timelines = [],
  projects = [],
  ...props
}) {
  let addedContents = [];
  return (
    <ul
      className={"relative border-s border-slate-700 " + className}
      {...props}
    >
      {timelines.map((timelineItem) => (
        <TimelineListItem
          className="mb-8 ml-4 last:mb-0"
          titleClass="text-xl mb-2"
          key={timelineItem.name}
          title={timelineItem.name}
          dateTime={timelineItem.dateTime}
          description={timelineItem.description}
        >
          {projects.length > 0 ? (
            <div className="flex flex-wrap">
              {projects.map((project) => {
                if (project.company == timelineItem.name) {
                  addedContents.push(project.company);
                  return (
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
                  );
                } else {
                  return "";
                }
              })}
            </div>
          ) : (
            <></>
          )}
        </TimelineListItem>
      ))}
      {addedContents.length != projects.length ? (
        <TimelineListItem
          className="mt-8 ml-4"
          titleClass="text-xl mb-2"
          key="etc"
          title="ETC"
        >
          <div className="flex flex-wrap">
            {projects.map((project) => {
              if (
                !addedContents.some((content) => content == project.company)
              ) {
                return (
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
                );
              }
            })}
          </div>
        </TimelineListItem>
      ) : (
        <></>
      )}
    </ul>
  );
}
