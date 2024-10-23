function Chip({ className = "", content = "" }) {
  return <span className={className}>{content}</span>;
}

function Chips({ className = "", contents = [] }) {
  return contents.map((content) => (
    <Chip key={content} className={className} content={content} />
  ));
}

export { Chip, Chips };
