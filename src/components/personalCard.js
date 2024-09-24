import Image from "next/image";

export default function PersonalCard(props) {
  return (
    <section className="mx-auto grid grid-cols-4 gap-8 rounded-xl border border-slate-700 bg-slate-800/60 px-8 py-4">
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
