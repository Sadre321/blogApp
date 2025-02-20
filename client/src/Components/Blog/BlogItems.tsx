import { BlogPostContent } from "../../types";

interface BlogItems {
  item: BlogPostContent
}

const BlogItems: React.FC<BlogItems> = ({ item }) => {
  return (

    <p
      className="text-lg group group-hover:border font-bold hover:text-yellow-600 border-yellow-600 hover:bg-yellow-950 rounded-lg p-2 hover:cursor-pointer"
    >
      {item.text}
      <span className="text-yellow-500 hidden font-semibold group-hover:inline-block ml-10 opacity-50 duration-500">
        {item.hashtags}
      </span>
    </p>

  );
};

export default BlogItems;
