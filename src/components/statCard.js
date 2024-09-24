import "./_statCard.css";

const defaultClassName =
  "gradient-border text-pretty border border-slate-700 px-8 py-4 text-center text-slate-200/90 hover:border-0 ";

export default function StatCard(props) {
  return (
    <div role="statCard" className={defaultClassName + props.className}>
      <p className="mb-4 text-4xl font-bold text-sky-400">{props.value}</p>
      <p>{props.title}</p>
    </div>
  );
}
