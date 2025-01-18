import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

const Info = () => {
  return (
    <div className="p-10 border border-yellow-600 bg-yellow-950 rounded-lg my-5">
            <h2 className="text-4xl font-bold mb-3">Kişisel Bloguma,</h2>
            <h2 className="text-4xl font-bold mb-5">Hoşgeldin!</h2>
            <p className="text-xl opacity-75">
              Bu sitede genel hayatımdan, yazılımdan, kodlamadan, spordan,
              tiyatrodan ve genel olarak hayatımda ne geçiyorsa anlatıyorum.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrInstagram className="text-2xl text-white hover:text-yellow-500" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl text-white hover:text-yellow-500" />
              </a>
            </div>
          </div>
  )
}

export default Info