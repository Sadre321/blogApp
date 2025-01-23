import React from "react";
import BlogComponent from "../../Components/Blog/Blogs";

interface BlogPostContent {
  text: string;
  hashtags: string;
}

interface BlogPost {
  date: string;
  content: BlogPostContent[];
}

const BlogPage: React.FC = () => {
  const blogPosts: BlogPost[] | null= [
    {
      date: "Ocak, 2025",
      content: [
        {
          text: "Blog sayfası oluşturuluyor",
          hashtags: "#create-react-app",
        },
        {
          text: "İngilizce öğrenildi",
          hashtags: "#learn-language",
        },
        {
          text: "Tiyatro baslama",
          hashtags: "#newThings",
        },
        {
          text: "Spor bitti",
          hashtags: "#fitness",
        },
      ],
    },
    {
      date: "Ağustos, 2024",
      content: [
        {
          text: "Mersin tatili",
          hashtags: "#summer #holiday",
        },
        {
          text: "Ilk is deneyimi",
          hashtags: "#tech #work",
        },
        {
          text: "Spora geri donus",
          hashtags: "#healty #fitness",
        },
      ],
    },
  ];

  return (
    <div className="my-5">
      <h1 className="text-5xl font-bold mb-10">Blog</h1>
      <BlogComponent blogPosts={blogPosts} />
    </div>
  );
};

export default BlogPage;
