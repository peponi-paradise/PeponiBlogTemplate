import Image from "next/image";

const defaultClassName =
  "mx-auto grid grid-cols-4 gap-8 rounded-xl border border-sky-400/80 bg-slate-700/70 px-8 py-4 ";

export default function PersonalCard(props) {
  return (
    <section className={defaultClassName + props.className}>
      <Image
        src={props.personalImage}
        alt="Personal image"
        className="m-auto"
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
        <p className="text-sm">{props.description}</p>
      </div>
    </section>
  );
}
