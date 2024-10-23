const defaultClassName =
  "bg-gradient-to-br from-slate-800 from-30% to-slate-700 border border-sky-700 rounded-xl px-2 py-2 sm:px-4 sm:py-4 text-center text-slate-200/90 ";

export default function StatCard({
  className = "",
  value = "",
  title = "",
  ...props
}) {
  return (
    <div className={defaultClassName + className} {...props}>
      <p className="mb-4 text-4xl font-bold text-sky-400">{value}</p>
      <p>{title}</p>
    </div>
  );
}
