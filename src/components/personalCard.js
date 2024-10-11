import Image from "next/image";

export default function PersonalCard(props) {
  if (props.personalImage !== undefined) {
    return (
      <section
        className={"grid grid-flow-row gap-4 break-words " + props.className}
      >
        <div className="flex flex-col gap-4 min-[480px]:flex-row min-[480px]:gap-8">
          <Image
            className="rounded-full object-cover object-center min-[480px]:max-h-64 min-[480px]:max-w-[40%]"
            src={props.personalImage}
            alt="Personal image"
          />
          <div className="my-auto grow">
            <p className="mb-4 text-2xl font-bold text-slate-200/90">
              {props.name}
            </p>
            <p className="text-sm">{props.occupation}</p>
            <p className="mb-2 text-sm">
              {props.responsibility !== undefined
                ? `${props.responsibility} @ `
                : ""}
              {props.company}
            </p>
            <p className="text-sm">{props.additionalInformation}</p>
          </div>
        </div>
        <p
          className={
            props.lineClamp !== undefined && props.lineClamp == true
              ? `line-clamp-5`
              : ""
          }
        >
          {props.description}
        </p>
      </section>
    );
  } else {
    return (
      <section className={"break-words " + props.className}>
        <p className="mb-4 text-2xl font-bold text-slate-200/90">
          {props.name}
        </p>
        <p className="text-sm">{props.occupation}</p>
        <p className="mb-2 text-sm">
          {props.responsibility !== undefined
            ? `${props.responsibility} @ `
            : ""}
          {props.company}
        </p>
        <p className="mb-4 text-sm">{props.additionalInformation}</p>
        <p
          className={
            props.lineClamp !== undefined && props.lineClamp == true
              ? `line-clamp-5`
              : ""
          }
        >
          {props.description}
        </p>
      </section>
    );
  }
}
