export default function ServiceTitle({
  className = "",
  title = "",
  description = "",
}) {
  return (
    <section className={className}>
      <p className="mb-2 text-2xl font-bold text-slate-200/90">{title}</p>
      <p>{description}</p>
    </section>
  );
}
