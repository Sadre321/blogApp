import { imgData } from "../../types";
import DumpItems from "./DumpItems";

const Dump: React.FC = () => {
  const data: imgData[] = [
    {
      date: "23 Nisan 1945,Cts",
      img: "https://picsum.photos/200/300",
      text: "asdjkajskldjlaskjdlaks",
    },
    {
      date: "23 Nisan 1945,Cts",
      img: "https://picsum.photos/500/200",
      text: "asdjkajskldjlaskjdlaks",
    },
    {
      date: "23 Nisan 1945,Cts",
      img: "https://picsum.photos/300/600",
      text: "asdjkajskldjlaskjdlaks",
    },
    {
      date: "23 Nisan 1945,Cts",
      img: "https://picsum.photos/250/320",
      text: "asdjkajskldjlaskjdlaks",
    },
    {
      date: "23 Nisan 1945,Cts",
      img: "https://picsum.photos/200/300",
      text: "asdjkajskldjlaskjdlaks",
    },
    {
      date: "23 Nisan 1945,Cts",
      img: "https://picsum.photos/400/500",
      text: "asdjkajskldjlaskjdlaks",
    },
  ];

  return (
    <div className="my-5">
      <h1 className="text-5xl font-bold mb-5">Anlar</h1>
      <p className="opacity-75 text-lg mb-10">
        Yıl içinde önemli-önemsiz büyük-küçük anlarımı ufak bir fotoğraf karesi
        ya da kısa bir video ile ekliyorum
      </p>
      <hr className="opacity-15" />
      <div className="py-5">
        <div className="flex flex-col items-center justify-center flex-wrap gap-10 py-2">
          {data.map((data, index) => (
            <DumpItems data={data} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dump;
