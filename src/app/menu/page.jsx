import React from "react";

export default function page() {
  return (
    <>
      <div className="bg-white">
        <div className="border border-Gray-300 rounded-xl w-[18rem] h-[25rem] flex flex-col items-center">
          <img
            src="https://res.cloudinary.com/dm4k7tvjq/image/upload/v1699021933/i8fjm40dls9ivncygtl4.jpg"
            className="w-[16.5rem] h-[15rem] rounded-xl object-cover mt-[0.5rem]"
          />
          <div className="flex flex-col w-[90%] mt-3">
            <h4 className="text-xl font-semibold">product name</h4>
            <p className="text-Gray-100 text-sm">
              Ultimate Bacon Cheeseburger Not only does this cheeseburger have
              bacon on
            </p>
            <p className="text-Red-100 text-xl font-semibold mt-2">456 ฿</p>
          </div>
        </div>
      </div>
    </>
  );
}
