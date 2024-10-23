const defaultClassName = "grow px-8 py-4 ";

export default function Main({ children, className = "", ...props }) {
  return (
    <main className={defaultClassName + className} {...props}>
      {children}
    </main>
  );
}
