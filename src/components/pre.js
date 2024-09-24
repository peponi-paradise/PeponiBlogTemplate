// figcaption from https://www.nokiahub.name/posts/prettify-mdx-code-blocks

import { CopyButton } from "./codeCopyButton";

export default function Pre({ children, raw, ...props }) {
  return (
    <div className="relative">
      <pre {...props}>
        {children}
        <CopyButton text={raw} />
      </pre>
    </div>
  );
}
