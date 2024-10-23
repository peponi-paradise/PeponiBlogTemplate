const outlineClassName = "h-2 w-full rounded-full bg-sky-600/20 ";
const progressClassName = "h-2 rounded-full bg-sky-600 ";

export default function ProgressBar({ className = "", progressPercent = 50 }) {
  let progressValue = `w-[${progressPercent}%]`;
  return (
    <div className={outlineClassName + className}>
      <div className={progressClassName + progressValue}></div>
    </div>
  );
}
