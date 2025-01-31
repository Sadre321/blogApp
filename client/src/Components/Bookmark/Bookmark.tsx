import BookmarkItem from "./BookmarkItem";
import { useLocation,Link } from "react-router";

const Bookmark: React.FC = ({ bookMarks }) => {
  const path = useLocation();

  if (!bookMarks || bookMarks.length === 0) {
    return <p>Site bulunmamaktadir</p>;
  }

  return (
    <>
      <div className="mt-10">
        {path.pathname === "/" ? (
          <>
            <h3 className="text-3xl font-bold mb-2 tracking-wide">
              Son Yazdıklarım
            </h3>
          </>
        ) : (
          <>
            <h1 className="text-5xl font-bold mb-5">Siteler</h1>
            <p className="opacity-75 text-lg mb-10">
              Gün içinde bir çok farklı konuda araştırma yapıyorum ve bulduğum
              linkleri kaybetmek istemiyorum. Çünkü başka bir gün aynı konu
              mutlaka işime yarıyor, bu yüzden linkleri bu sayfada kayıt altına
              almaya başladım.
            </p>
            <hr className="opacity-15" />
          </>
        )}

        <div className="py-5">
          <div className="flex flex-col flex-wrap gap-16 py-4 pb-5">
            {bookMarks.map((book, i) => (
              <div key={i}>
                {path.pathname != "/" && (
                  <h2 className="text-xl font-semibold mb-3 opacity-65">
                    {book.date}
                  </h2>
                )}
                {book.content.map((content, i) => (
                  <BookmarkItem content={content} key={i} />
                ))}
              </div>
            ))}
          </div>

          {path.pathname == "/" && (
            <div className="mb-16">
              <Link to="/bookmarks" className="text-xl font-medium border-b">
                Tüm Linkler
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Bookmark;
