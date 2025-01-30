import BookmarkItem from "./BookmarkItem";

const Bookmark: React.FC = ({ bookMarks }) => {
  console.log(bookMarks);

  if (!bookMarks || bookMarks.length === 0) {
    return <p>Site bulunmamaktadir</p>;
  }

  return (
    <>
      <h1 className="text-5xl font-bold mb-5">Siteler</h1>
      <p className="opacity-75 text-lg mb-10">
        Gün içinde bir çok farklı konuda araştırma yapıyorum ve bulduğum
        linkleri kaybetmek istemiyorum. Çünkü başka bir gün aynı konu mutlaka
        işime yarıyor, bu yüzden linkleri bu sayfada kayıt altına almaya
        başladım.
      </p>
      <hr className="opacity-15" />
      <div className="py-5">
        <div className="flex flex-col flex-wrap gap-16 py-2">
          {bookMarks.map((book, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold mb-3 opacity-65">
                {book.date}
              </h2>
              {book.content.map((content, i) => (
                <BookmarkItem content={content} key={i} />
              ))}
            </div>
          ))}
        </div>
        <div className="mb-10">
          <a href="#" className="text-xl font-medium border-b">
            Tum Linkler
          </a>
        </div>
      </div>
    </>
  );
};

export default Bookmark;
