import { BlogPost } from "../../types";
import BlogItems from "./BlogItems";

interface Blogs {
  blogPosts: BlogPost[]
}

const Blogs: React.FC<Blogs> = ({ blogPosts }) => {
  if (!blogPosts || blogPosts.length === 0) {
    return <p>No blog posts available.</p>;
  }

  return (
    <>
      {blogPosts.map((post, index) => (
        <article className="mb-12" key={index}>
          <h2 className="text-xl font-semibold mb-3 opacity-65">{post.date}</h2>
          {post.content.map((item, i) => (
            <BlogItems item={item} key={i} />
          ))}
        </article>
      ))}
    </>
  );
};

export default Blogs;
