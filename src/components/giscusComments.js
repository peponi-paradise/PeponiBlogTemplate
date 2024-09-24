"use client";

import Giscus from "@giscus/react";

export default function GiscusComments() {
  return (
    <section className="mt-8">
      <Giscus
        id="comments"
        repo="peponi-paradise/PeponiBlogTemplate"
        repoId="R_kgDOMu-0mA"
        category="Comments"
        categoryId="DIC_kwDOMu-0mM4Ciuju"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="transparent_dark"
        lang="en"
        loading="lazy"
      />
    </section>
  );
}
