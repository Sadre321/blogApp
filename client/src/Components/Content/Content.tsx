import { MdOutlineDateRange } from "react-icons/md";

const Content = () => {
  return (
    <div className="mt-10">
      <h3 className="text-3xl font-bold mb-5 tracking-wide">Son Yazdıklarım</h3>
      <div className="flex flex-wrap gap-5 py-2">
        <div className="border border-gray-600 py-5 px-10 rounded-lg hover:border-gray-400 duration-200">
          <h3 className="text-3xl font-bold ">Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, omnis.
          </p>
          <span className="flex items-center gap-2">
            {" "}
            <MdOutlineDateRange /> 02 Ocak 2025
          </span>
        </div>
        <div className="border border-gray-600 py-5 px-10 rounded-lg hover:border-gray-400 duration-200">
          <h3 className="text-3xl font-bold ">Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, omnis.
          </p>
          <span className="flex items-center gap-2">
            {" "}
            <MdOutlineDateRange /> 02 Ocak 2025
          </span>
        </div>
        <div className="border border-gray-600 py-5 px-10 rounded-lg hover:border-gray-400 duration-200">
          <h3 className="text-3xl font-bold ">Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, omnis.
          </p>
          <span className="flex items-center gap-2">
            {" "}
            <MdOutlineDateRange /> 02 Ocak 2025
          </span>
        </div>
        <div className="border border-gray-600 py-5 px-10 rounded-lg hover:border-gray-400 duration-200">
          <h3 className="text-3xl font-bold ">Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, omnis.
          </p>
          <span className="flex items-center gap-2">
            {" "}
            <MdOutlineDateRange /> 02 Ocak 2025
          </span>
        </div>
      </div>
    </div>
  );
};

export default Content;
