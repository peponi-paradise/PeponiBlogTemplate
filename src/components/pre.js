// figcaption from https://www.nokiahub.name/posts/prettify-mdx-code-blocks

import { CopyButton } from "./codeCopyButton";

export default function Pre({ children, raw, ...props }) {
  return (
    <pre className="relative" {...props}>
      {children}
      <CopyButton text={raw} />
    </pre>
  );
}
