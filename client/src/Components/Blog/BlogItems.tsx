interface BlogItemsLaayout {
    post:string,
    index:number
}

const BlogItems:React.FC<BlogItemsLaayout> = ({post,index}) => {
  return (
    <article key={index} className="mb-12">
            <h2 className="text-xl font-semibold mb-3 opacity-65">{post.date}</h2>
            {post.content.map((item, idx) => (
              <p
                key={idx}
                className="text-lg group group-hover:border font-bold hover:text-yellow-600 border-yellow-600 hover:bg-yellow-950 rounded-lg p-2"
              >
                {item.text}
                <span className="text-yellow-500 hidden font-semibold group-hover:inline-block ml-10 opacity-50 duration-500">
                  {item.hashtags}
                </span>
              </p>
            ))}
          </article>
  )
}

export default BlogItems