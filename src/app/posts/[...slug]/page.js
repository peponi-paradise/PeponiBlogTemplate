// code copy button from
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
import ArticleHeaderMobile from "@/components/articleHeaderMobile";
import { MetaInformation } from "@/app/constants";
import ArticleHeaderDesktop from "@/components/articleHeaderDesktop";
import Toc from "@/components/toc";
import getToc from "@/lib/tocParser";
import GiscusComments from "@/components/giscusComments";

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

export function generateMetadata(props) {
  let page = getPost(props.params.slug[0], props.params.slug[1]);

  // localhost for local test. It should be MetaInformation.baseUrl
  let ogSearchParams = new URL(`localhost:3000/api/post`);
  ogSearchParams.searchParams.set("title", page.title);
  ogSearchParams.searchParams.set("description", page.description);
  ogSearchParams.searchParams.set("date", page.date);
  ogSearchParams.searchParams.set("minutesToRead", page.minutesToRead);
  ogSearchParams.searchParams.set("category", page.category);
  ogSearchParams.searchParams.set("tags", page.tags);

  return {
    title: page.title,
    description: page.description,
    keywords: [`${page.category}`, page.tags],
    openGraph: {
      title: page.title,
      description: page.description,
      type: "article",
      authors: [`${MetaInformation.author}`],
      publishedTime: new Date(page.date).toISOString(),
      url: `${MetaInformation.baseUrl}/posts/${page.folderPath}/${page.slug}`,
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

export default function Slug(props) {
  let page = getPost(props.params.slug[0], props.params.slug[1]);
  return (
    <Main className="my-8">
      <section className="prose prose-invert grid min-w-full grid-cols-1 justify-between gap-12 lg:grid-cols-12">
        <ArticleHeaderMobile
          className="lg:hidden"
          category={page.category}
          title={page.title}
          date={page.date}
          minutesToRead={page.minutesToRead}
          author={MetaInformation.author}
          tags={page.tags}
        />
        <ArticleHeaderDesktop
          className="hidden lg:col-span-3 lg:block"
          category={page.category}
          title={page.title}
          date={page.date}
          minutesToRead={page.minutesToRead}
          author={MetaInformation.author}
          tags={page.tags}
        />
        <div className="lg:col-span-7">
          <MDXRemote
            source={page.content}
            options={options}
            components={customComponents}
          />
          <GiscusComments />
        </div>
        <Toc
          className="not-prose sticky top-28 hidden min-w-40 self-start lg:col-span-2 lg:block"
          Toc={getToc(page.content)}
        ></Toc>
      </section>
    </Main>
  );
}
