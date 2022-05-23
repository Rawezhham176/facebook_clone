import React from "react";
import Image from "next/image";

const Contact = ({ name, src }) => {
  return (
    <div
      className="flex items-center 
    space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2"
    >
      <Image
        className="rounded-full"
        width={40}
        height={40}
        src={src}
        layout="fixed"
        objectFit="cover"
      />
      <p>{name}</p>
      <div
        className="absolute bottom-2 left-7 bg-green-400
      h-3 w-3 rounded-full "
      ></div>
    </div>
  );
};

export default Contact;
