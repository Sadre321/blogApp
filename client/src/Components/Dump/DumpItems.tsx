import React from "react";

const DumpItems = ({data}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="h-8 lg:h-9 px-4 sticky top-0 rounded-full bg-orange-400  text-sm lg:text-lg text-white inline-flex items-center">
          {data.date}
        </h2>
        <img
          src={data.img}
          className="rounded-xl"
          alt="resim"
        />
        <h6 className="text-xl font-medium">
          <p className="text-center bg-gray-700 text-gray-400 px-2 py-4 rounded-full">
            {data.text}
          </p>
        </h6>
      </div>
    </>
  );
};

export default DumpItems;
