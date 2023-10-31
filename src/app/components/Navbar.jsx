"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`w-screen h-24 fixed top-0 left-0 transition ease-linear ${
          scrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center mx-[5rem]">
          <h2 className="font-custom text-white text-[4rem] flex items-center cursor-pointer hover:scale-110 duration-300">
            Pizza<span className="text-Red-100 ml-2">.</span>
          </h2>
          <div className="flex items-center">
            <p className="font-semibold text-white mr-12 cursor-pointer hover:text-Red-100 hover:underline">
              Home
            </p>
            <p className="font-semibold text-white mr-12 cursor-pointer hover:text-Red-100 hover:underline">
              Menu
            </p>
            <p className="font-semibold text-white mr-12 cursor-pointer hover:text-Red-100 hover:underline">
              About
            </p>
            <p className="font-semibold text-white mr-12 border-2 border-white rounded-xl px-4 py-2 cursor-pointer hover:text-Red-100 hover:border-Red-100">
              Call Us: +66123456789
            </p>
            <button className="font-semibold mr-6 text-white cursor-pointer hover:text-Red-100 hover:underline">
              Login
            </button>
            <div className="h-[100%] relative">
              <img
                className="w-8 h-8 cursor-pointer"
                src="https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/shopping-cart.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvc2hvcHBpbmctY2FydC5wbmciLCJpYXQiOjE2OTg3NjI1NzUsImV4cCI6MTczMDI5ODU3NX0.4RYwFu26BZs3sqkz3mb6dJrU52nEhTVmiV1waYXI7-w&t=2023-10-31T14%3A29%3A35.753Z"
              />
              <img
                className="cursor-pointer w-8 h-8 absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-100"
                src="https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/shopping-cart-red.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvc2hvcHBpbmctY2FydC1yZWQucG5nIiwiaWF0IjoxNjk4NzYzNDY2LCJleHAiOjE3MzAyOTk0NjZ9.UnyCyI51Pvj5WDUzadHMpe4JN_AALWkBML53yiZQaQY&t=2023-10-31T14%3A44%3A26.658Z"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
