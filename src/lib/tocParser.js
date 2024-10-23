const noPadding = 0;
const padding = 4;

export default function getToc(markdown) {
  let matchItem = /^(##|###) (.*$)/gim;
  if (markdown.match(matchItem)) {
    return markdown.match(matchItem).map((header) => ({
      text: header.replace("# ", "").replace(/#/g, ""),
      innerLink: header
        .replace("# ", "")
        .replace(/#/g, "")
        .replace(/ /g, "-")
        .replace("?", "")
        .replace(/,/g, "")
        .replace(/\(/g, "")
        .replace(/\)/g, "")
        .replace(/\./g, "")
        .toLowerCase(),
      padding: header.includes("###") ? padding : noPadding,
    }));
  } else {
    return [];
  }
}
