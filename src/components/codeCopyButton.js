// button from https://claritydev.net/blog/copy-to-clipboard-button-nextjs-mdx-rehype

"use client";

import { useState } from "react";
import clipboardIcon from "@/public/svgs/clipboard.svg";
import clipboardHover from "@/public/svgs/clipboardHover.svg";
import greenCheck from "@/public/svgs/greenCheck.svg";
import Image from "next/image";

export const CopyButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsHover(false);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  async function hoverChange(isHover) {
    if (!isCopied) {
      setIsHover(isHover);
    }
  }

  return (
    <button
      disabled={isCopied}
      onMouseOver={() => hoverChange(true)}
      onMouseOut={() => hoverChange(false)}
      onClick={copy}
    >
      <Image
        alt="Copy code"
        title="Copy code"
        src={isHover ? clipboardHover : isCopied ? greenCheck : clipboardIcon}
      />
    </button>
  );
};
