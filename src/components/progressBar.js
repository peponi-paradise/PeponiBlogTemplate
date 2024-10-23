const outlineClassName = "h-2 w-full rounded-full bg-sky-600/20 ";
const progressClassName = "h-2 rounded-full bg-sky-600 ";

export default function ProgressBar({ className = "", barClassName = "" }) {
  let percent = barClassName.split("[")[1].split("]")[0];
  return (
    <div className={outlineClassName + className} title={percent}>
      <div className={progressClassName + barClassName}></div>
    </div>
  );
}
