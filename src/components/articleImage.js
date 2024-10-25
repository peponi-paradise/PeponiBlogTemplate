import path from "path";

export default function ArticleImage({src, ...props})
{
    let imgPath=process.env.NODE_ENV=="production"?path.join(process.cwd(),src):src;
    return <img src={imgPath} {...props}/>
}