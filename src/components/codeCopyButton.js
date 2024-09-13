// button from https://claritydev.net/blog/copy-to-clipboard-button-nextjs-mdx-rehype

"use client";

import { useState } from "react";
import clipboardIcon from "@/public/images/clipboard.svg";
import greenCheck from "@/public/images/greenCheck.svg";
import Image from "next/image";

export const CopyButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <button disabled={isCopied} onClick={copy}>
      <Image
        alt="Copy code"
        title="Copy code"
        src={isCopied ? greenCheck : clipboardIcon}
      />
    </button>
  );
};
