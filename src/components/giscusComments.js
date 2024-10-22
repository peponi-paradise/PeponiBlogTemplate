"use client";

import { MetaInformation } from "@/app/constants";
import Giscus from "@giscus/react";

export default function GiscusComments() {
  return (
    <section className="mt-8">
      <Giscus
        id="comments"
        repo={process.env.NEXT_PUBLIC_GISCUS_REPO}
        repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID}
        category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY}
        categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="transparent_dark"
        lang={MetaInformation.language}
        loading="lazy"
      />
    </section>
  );
}
