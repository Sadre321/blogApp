import BookmarkComponent from "../../Components/Bookmark/Bookmark";

interface BookmarkContent {
  heading: string;
  text: string;
}

interface BookmarksLayouts {
  date: string;
  content: BookmarkContent[];
}

const Bookmark: React.FC = () => {
  const bookMarks: BookmarksLayouts[] | null = [
    {
      date: "23 Nisan 1923",
      content: [
        {
          heading: "Lorem ipsum dolor sit amet.",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium, omnis.",
        },
        {
          heading: "Lorem ipsum dolor sit amet.",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium, omnis.",
        },
        {
          heading: "Lorem ipsum dolor sit amet.",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium, omnis.",
        },
      ],
    },
    {
      date: "14 Subat 2025",
      content: [
        {
          heading: "Color Palette.",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium, omnis.",
        }
      ],
    },
  ];

  return (
    <div className="my-5">
      
      <BookmarkComponent bookMarks={bookMarks}/>
    </div>
  );
};

export default Bookmark;
