// code copy from
// 1. https://claritydev.net/blog/copy-to-clipboard-button-nextjs-mdx-rehype
// 2. https://www.nokiahub.name/posts/prettify-mdx-code-blocks

import Main from "@/layouts/globalMain";
import { getPost } from "@/lib/postsParser";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { remarkAlert } from "remark-github-blockquote-alert";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import "remark-github-blockquote-alert/alert.css";
import remarkBreaks from "remark-breaks";
import rehypePrettyCode from "rehype-pretty-code";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkSimplePlantumlPlugin from "@akebifiky/remark-simple-plantuml";
import "katex/dist/katex.css";
import "./_postViewCss.css";
import { visit } from "unist-util-visit";
import Pre from "@/components/pre";

const autolinkHeadingsOptions = {
  behavior: "append",
  properties: {
    className: "innerlink",
    arialabel: "innerlink",
  },
};

const rehypePrettyCodeOptions = {
  theme: "dark-plus",
  keepBackground: false,
};

const beforeRehypePretty = () => (tree) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;
      if (codeEl.tagName !== "code") return;
      node.raw = codeEl.children?.[0].value;
    }
  });
};

const afterRehypePretty = () => (tree) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "figure") {
      if (!("data-rehype-pretty-code-figure" in node.properties)) {
        return;
      }

      for (const child of node.children) {
        if (child.tagName === "pre") {
          child.properties["raw"] = node.raw;
        }
      }
    }
  });
};

const customComponents = {
  pre: Pre,
};

const options = {
  mdxOptions: {
    remarkPlugins: [
      remarkMath,
      remarkSimplePlantumlPlugin,
      remarkBreaks,
      remarkAlert,
      remarkGfm,
    ],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, autolinkHeadingsOptions],
      rehypeKatex,
      beforeRehypePretty,
      [rehypePrettyCode, rehypePrettyCodeOptions],
      afterRehypePretty,
    ],
  },
};

export default function Slug(props) {
  let page = getPost(props.params.slug[0], props.params.slug[1]);
  return (
    <Main>
      <section className="prose prose-invert flex min-w-full flex-col justify-between lg:flex-row">
        <p className="min-w-40 text-3xl lg:hidden">article header</p>
        <p className="mx-auto hidden min-w-40 text-3xl lg:block">
          article header
        </p>
        <div className="max-w-1/2">
          <MDXRemote
            source={page.content}
            options={options}
            components={customComponents}
          />
        </div>
        <p className="mx-auto hidden min-w-40 text-3xl lg:block">TOC</p>
      </section>
    </Main>
  );
}
