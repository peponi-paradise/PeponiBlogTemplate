"use client";

// button from https://claritydev.net/blog/copy-to-clipboard-button-nextjs-mdx-rehype
import * as Icons from "@/components/svgComponents";
import { useState } from "react";

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
    <button disabled={isCopied} onClick={copy} title="Click to copy">
      {isCopied ? (
        <Icons.Check className="fill-emerald-400" />
      ) : (
        <Icons.Clipboard className="fill-slate-400 hover:fill-sky-400" />
      )}
    </button>
  );
};
