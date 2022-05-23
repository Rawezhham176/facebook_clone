import React from "react";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Contact from "./Contact";

const contacts = [
  {
    name: "Jim",
    src: "https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg",
  },
  {
    name: "Jack",
    src: "https://images.pexels.com/photos/3031397/pexels-photo-3031397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

const Widgets = () => {
  return (
    <div className="hidden lg:flex flex-col w-60 mt-5">
      <div
        className="flex justify-between items-center 
      text-gray-500 md-5"
      >
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((cont) => (
        <Contact key={cont.id} src={cont.src} name={cont.name} />
      ))}
    </div>
  );
};

export default Widgets;
