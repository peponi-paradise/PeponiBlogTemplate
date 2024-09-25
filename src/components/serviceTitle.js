export default function ServiceTitle(props) {
  return (
    <section className={props.className}>
      <p className="mb-2 text-2xl font-bold text-slate-200/90">{props.title}</p>
      <p className="text-sm">{props.description}</p>
    </section>
  );
}
