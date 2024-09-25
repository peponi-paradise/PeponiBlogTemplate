const defaultClassName = "grow px-8 py-4 ";

export default function Main({ children, ...props }) {
  return <main className={defaultClassName + props.className}>{children}</main>;
}
