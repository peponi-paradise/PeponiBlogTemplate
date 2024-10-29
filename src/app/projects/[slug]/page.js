// code copy button from
// 1. https://claritydev.net/blog/copy-to-clipboard-button-nextjs-mdx-rehype
// 2. https://www.nokiahub.name/posts/prettify-mdx-code-blocks
import { MetaInformation } from "@/app/constants";
import ArticleHeaderDesktop from "@/components/articleHeaderDesktop";
import ArticleHeaderMobile from "@/components/articleHeaderMobile";
import GiscusComments from "@/components/giscusComments";
import Pre from "@/components/pre";
import Toc from "@/components/toc";
import Main from "@/layouts/globalMain";
import { getProject } from "@/lib/projectParser";
import getToc from "@/lib/tocParser";
import remarkSimplePlantumlPlugin from "@akebifiky/remark-simple-plantuml";
import "katex/dist/katex.css";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { remarkAlert } from "remark-github-blockquote-alert";
import "remark-github-blockquote-alert/alert.css";
import remarkMath from "remark-math";
import { visit } from "unist-util-visit";

import "./_articleViewCss.css";

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
    useDynamicImport: true,
  },
};

export function generateMetadata(props) {
  let page = getProject(props.params.slug);

  let ogSearchParams = new URL(`${MetaInformation.baseUrl}/api/openGraph`);
  ogSearchParams.searchParams.set("title", page.title);
  ogSearchParams.searchParams.set("description", page.description);
  ogSearchParams.searchParams.set(
    "date",
    `${new Date(page.dateFrom).getFullYear()}.${new Date(page.dateFrom).getMonth() + 1} - ${page.dateTo !== undefined && page.dateTo.constructor == Date ? `${new Date(page.dateTo).getFullYear()}.${new Date(page.dateTo).getMonth() + 1}` : page.dateTo}`,
  );
  ogSearchParams.searchParams.set("minutesToRead", page.minutesToRead);
  ogSearchParams.searchParams.set("category", page.company);
  if (page.tags !== undefined && page.tags.length > 0) {
    ogSearchParams.searchParams.set("tags", page.tags);
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      type: "article",
      authors: [`${MetaInformation.author}`],
      publishedTime: new Date(page.published).toISOString(),
      url: `${MetaInformation.baseUrl}/projects/${page.slug}`,
      images: [
        {
          url: ogSearchParams.toString(),
          alt: page.title,
          width: 1200,
          height: 630,
          type: "image/png",
        },
      ],
    },
  };
}

export default function Slug({ params, searchParams, ...props }) {
  let page = getProject(params.slug);
  let toc = getToc(page.content);
  return (
    <Main {...props}>
      <section className="grid justify-between min-w-full grid-cols-1 gap-12 prose prose-invert lg:grid-cols-12">
        <ArticleHeaderMobile
          className="lg:hidden"
          category={page.company}
          title={page.title}
          date={`${new Date(page.dateFrom).getFullYear()}.${new Date(page.dateFrom).getMonth() + 1} - ${page.dateTo !== undefined && page.dateTo.constructor == Date ? `${new Date(page.dateTo).getFullYear()}.${new Date(page.dateTo).getMonth() + 1}` : page.dateTo}`}
          minutesToRead={page.minutesToRead}
          author={MetaInformation.author}
          tags={page.tags}
        />
        <ArticleHeaderDesktop
          className="hidden lg:col-span-3 lg:block"
          category={page.company}
          title={page.title}
          date={`${new Date(page.dateFrom).getFullYear()}.${new Date(page.dateFrom).getMonth() + 1} - ${page.dateTo !== undefined && page.dateTo.constructor == Date ? `${new Date(page.dateTo).getFullYear()}.${new Date(page.dateTo).getMonth() + 1}` : page.dateTo}`}
          minutesToRead={page.minutesToRead}
          author={MetaInformation.author}
          tags={page.tags}
        />
        <div className="lg:col-span-7">
          {page.thumbnail !== undefined && page.thumbnail != "" ? (
            <Image
              className="object-cover object-center mt-0 rounded-xl"
              src={page.thumbnail}
              alt={page.alt}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          ) : (
            <></>
          )}
          <MDXRemote
            source={page.content}
            options={options}
            components={customComponents}
          />
          <GiscusComments />
        </div>
        {toc.length > 0 ? (
          <Toc
            className="sticky self-start hidden not-prose top-28 min-w-40 lg:col-span-2 lg:block"
            toc={toc}
          ></Toc>
        ) : (
          <></>
        )}
      </section>
    </Main>
  );
}
