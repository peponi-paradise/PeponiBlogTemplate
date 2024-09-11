import Main from "@/layouts/globalMain";
import { getPost } from "@/lib/postsParser";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { remarkAlert } from "remark-github-blockquote-alert";
import "@/app/posts/[...slug]/_github-markdown-dark.css";
import "remark-github-blockquote-alert/alert.css";
import remarkBreaks from "remark-breaks";
import rehypePrettyCode from "rehype-pretty-code";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkSimplePlantumlPlugin from "@akebifiky/remark-simple-plantuml";
import "katex/dist/katex.css";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkMath, remarkSimplePlantumlPlugin, remarkBreaks, remarkAlert, remarkGfm],
    rehypePlugins: [rehypeKatex, rehypePrettyCode],
  },
};

export default function Slug(props) {
  let page = getPost(props.params.slug[0], props.params.slug[1]);
  return (
    <Main>
      <div className="markdown-body">
        <MDXRemote source={page.content} options={options} />
      </div>
    </Main>
  );
}
