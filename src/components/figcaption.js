// figcaption from https://www.nokiahub.name/posts/prettify-mdx-code-blocks

import { CopyButton } from "./codeCopyButton";

export default function Figcaption({ children, raw, ...props }) {
  return (
    <figcaption {...props}>
      <div className="flex justify-between">
        {children}
        <CopyButton text={raw} />
      </div>
    </figcaption>
  );
}
