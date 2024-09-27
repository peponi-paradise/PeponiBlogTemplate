const outline = "h-2 w-full rounded-full bg-sky-600/20 ";
const progress = "h-2 rounded-full bg-sky-600 ";

export default function ProgressBar(props) {
  return (
    <div className={outline + props.className}>
      <div className={progress + props.progress}></div>
    </div>
  );
}
