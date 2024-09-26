import Image from "next/image";
import "./_gradientBorder.css";

export default function PersonalCard(props) {
  if (props.personalImage !== undefined) {
    return (
      <section
        className={"grid grid-cols-4 gap-8 break-words " + props.className}
      >
        <Image
          src={props.personalImage}
          alt="Personal image"
          className="m-auto size-full"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkF9eqBwABXgDR9lkLFAAAAABJRU5ErkJggg=="
        />
        <div className="col-span-3 my-auto">
          <p className="mb-2 text-2xl font-bold text-slate-200/90">
            {props.name}
          </p>
          <p className="text-sm">{props.occupation}</p>
          <p className="mb-2 text-sm">
            {props.responsibility !== undefined
              ? `${props.responsibility} @`
              : ""}{" "}
            {props.company}
          </p>
          <p className="mb-2 text-sm">{props.additionalInformation}</p>
          <p className="text-sm">{props.description}</p>
        </div>
      </section>
    );
  } else {
    return (
      <section className={"break-words " + props.className}>
        <p className="mb-2 text-2xl font-bold text-slate-200/90">
          {props.name}
        </p>
        <p className="text-sm">{props.occupation}</p>
        <p className="mb-2 text-sm">
          {props.responsibility !== undefined
            ? `${props.responsibility} @`
            : ""}{" "}
          {props.company}
        </p>
        <p className="mb-2 text-sm">{props.additionalInformation}</p>
        <p className="text-sm">{props.description}</p>
      </section>
    );
  }
}
