import BlogItems from "./BlogItems";

const Blogs:React.FC = ({ blogPosts }) => {
    if (!blogPosts || blogPosts.length === 0) {
      return <p>No blog posts available.</p>;
    }
  
    return (
      <>
        {blogPosts.map((post, index) => (
          <BlogItems post={post} key={index}/>
        ))}
      </>
    );
  };
  
  export default Blogs;
  