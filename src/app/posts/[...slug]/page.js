import Main from "@/layouts/globalMain";
import { getPost } from "@/lib/postsParser";

export default function Slug(props) {
  let page = getPost(props.params.slug[0], props.params.slug[1]);
  return <Main>{page.content}</Main>;
}
