import Info from "../Components/Info/Info";
import Content from "../Components/Content/Content";
import Bookmark from "../Components/Bookmark/Bookmark";

interface BookmarkContent {
  heading: string;
  text: string;
}

interface BookmarksLayouts {
  date: string;
  content: BookmarkContent[];
}


const Home = () => {

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
  ];

  return (
    <div>
      <Info />
      <Content />
      <Bookmark bookMarks={bookMarks}/>
    </div>
  );
};

export default Home;
