import { BookmarkContent } from "../../types";

interface BookmarkItem {
  content:BookmarkContent
}

const BookmarkItem: React.FC<BookmarkItem> = ({ content }) => {
  return (
    <>
      <div
        className="rounded px-2 py-2 group hover:border-yellow-600 hover:bg-yellow-950 hover:text-white hover:shadow-lg duration-200 w-full cursor-pointer"
      >
        <h6 className="text-xl font-medium group-hover:text-yellow-600">
          {content.heading}
        </h6>
        {content.text && <p className="opacity-75">{content.text}</p>}
      </div>
    </>
  );
};

export default BookmarkItem;
