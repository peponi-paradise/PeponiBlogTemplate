import { Chips } from "./chip";

export default function ArticleHeaderMobile(props) {
  return (
    <section className={"text-center " + `${props.className}`}>
      <h1>{props.title}</h1>
      <p>
        <span>{props.author}</span>
        {" │ "}
        <span>{new Date(props.date).toLocaleDateString()}</span>
      </p>
      <Chips
        className="mr-1 rounded-full border border-blue-800/60 bg-blue-900/40 px-1 text-xs text-blue-400/75"
        contents={props.tags}
      ></Chips>
    </section>
  );
}
