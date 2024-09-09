function Chip(content) {
  return (
    <span
      key="content"
      className="bg-indigo-950 px-1 py-1 border border-indigo-500 rounded-lg"
    >
      {content}
    </span>
  );
}

function Chips(contents) {
  return (
    <p className="flex flex-row gap-1">
      {contents.map((content) => Chip(content))}
    </p>
  );
}

export { Chip, Chips };
