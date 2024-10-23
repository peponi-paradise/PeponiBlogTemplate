const defaultClassName = "px-8 py-4 grow ";

export default function Main({ children, className = "", ...props }) {
  return (
    <main className={defaultClassName + className} {...props}>
      {children}
    </main>
  );
}
