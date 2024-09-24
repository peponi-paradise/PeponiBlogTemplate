const defaultClassName =
  "mx-auto rounded-xl border border-sky-400/80 bg-slate-700/70 px-8 py-4 ";

export default function ServiceTitle(props) {
  return (
    <section className={defaultClassName + props.className}>
      <p className="mb-2 text-2xl font-bold text-slate-200/90">{props.title}</p>
      <p className="text-sm">{props.description}</p>
    </section>
  );
}
