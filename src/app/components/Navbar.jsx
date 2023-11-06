"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Loading from "./Loading";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const { data: session } = useSession();
  const [toggle, setToggle] = useState(false);

  const [loading, setLoading] = useState(false);

  const clickHome = () => {
    setLoading(true);
    router.push("/");
  };

  const clickMenu = () => {
    setLoading(true);
    router.push("/menu");
  };

  const clickAbout = () => {
    setLoading(true);
    router.push("/about");
  };

  const clickToggle = () => {
    setToggle(!toggle);
  };

  const clickCart = () => {
    setLoading(true);
    router.push("/cart");
  };

  const handlerLogout = () => {
    signOut({
      redirect: true,
      callbackUrl: `${window.location.origin}/`,
    });
  };

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

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <nav
        className={`w-screen h-24 fixed top-0 left-0 right-0 transition ease-linear z-10 ${
          scrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center mx-[5rem]">
          <h2
            className="font-custom text-white text-[4rem] flex items-center cursor-pointer hover:scale-110 duration-300"
            onClick={clickHome}
          >
            Pizza<span className="text-Red-100 ml-2">.</span>
          </h2>
          <div className="flex items-center">
            <p
              className="font-semibold text-white mr-12 cursor-pointer hover:text-Red-100 hover:underline"
              onClick={clickHome}
            >
              Home
            </p>
            <p
              className="font-semibold text-white mr-12 cursor-pointer hover:text-Red-100 hover:underline"
              onClick={clickMenu}
            >
              Menu
            </p>
            <p
              className="font-semibold text-white mr-12 cursor-pointer hover:text-Red-100 hover:underline"
              onClick={clickAbout}
            >
              About
            </p>
            <p className="font-semibold text-white mr-12 border-2 border-white rounded-lg px-4 py-2 cursor-pointer hover:text-Red-100 hover:border-Red-100">
              Call Us: +66123456789
            </p>
            {session?.user ? (
              <>
                <img
                  className="w-[2.5rem] h-[2.5rem] mr-6 rounded-full cursor-pointer"
                  src="https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/profile.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvcHJvZmlsZS5qcGciLCJpYXQiOjE2OTg5MDU2NTAsImV4cCI6MTczMDQ0MTY1MH0.wO8NtY89AUDSOeIh9DMZU5w-4N5f_GpeUAtBLXpR3WY&t=2023-11-02T06%3A14%3A10.278Z"
                  onClick={clickToggle}
                />
                {toggle ? (
                  <>
                    <div className="absolute top-[75%] right-7 w-[9rem] h-[10.5rem] bg-white">
                      <div className="flex flex-col items-center">
                        <p className="py-2 px-6 border-b border-Red-100 font-medium hover:text-Red-100 cursor-pointer">
                          History
                        </p>
                        <p
                          onClick={clickCart}
                          className="py-2 px-6 border-b border-Red-100 font-medium hover:text-Red-100 cursor-pointer"
                        >
                          Order
                        </p>
                        <p className="py-2 px-6 border-b border-Red-100 font-medium hover:text-Red-100 cursor-pointer">
                          Profile
                        </p>
                        <p
                          className="cursor-pointer py-2 font-medium hover:text-Red-100"
                          onClick={handlerLogout}
                        >
                          Log out
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </>
            ) : (
              <button
                onClick={() => router.push("/login")}
                className="font-semibold mr-6 text-white cursor-pointer hover:text-Red-100 hover:underline"
              >
                Login
              </button>
            )}
            <div className="h-[100%] relative">
              <img
                onClick={clickCart}
                className="w-8 h-8 cursor-pointer"
                src="https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/shopping-cart.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvc2hvcHBpbmctY2FydC5wbmciLCJpYXQiOjE2OTg3NjI1NzUsImV4cCI6MTczMDI5ODU3NX0.4RYwFu26BZs3sqkz3mb6dJrU52nEhTVmiV1waYXI7-w&t=2023-10-31T14%3A29%3A35.753Z"
              />
              <img
                onClick={clickCart}
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
