function Chip(props) {
  return <span className={props.className}>{props.content}</span>;
}

function Chips(props) {
  return props.contents.map((content) => (
    <Chip key={content} className={props.className} content={content} />
  ));
}

export { Chip, Chips };
