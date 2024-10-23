export default function KnowledgeBadge({
  children,
  className = "",
  title = "",
  ...props
}) {
  return (
    <div
      className={"flex gap-1 px-2 py-1 text-sm text-black rounded " + className}
      title={title}
      {...props}
    >
      {children}
      <span>{title}</span>
    </div>
  );
}
