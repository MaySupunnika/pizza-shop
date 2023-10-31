import Image from "next/image";
import Navbar from "./components/Navbar";
import PromotionMeal from "./components/PromotionMeal";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='bg-[url("https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/pizza-home.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvcGl6emEtaG9tZS5qcGciLCJpYXQiOjE2OTg3NDk0MzMsImV4cCI6MTczMDI4NTQzM30.mII-gGXcsT9OoZAKLOUybv8lCd6ZBEF0_ofEyALdZp8&t=2023-10-31T10%3A50%3A34.200Z")] w-screen  h-[850px] bg-cover pt-[17rem]'>
        <div className="flex flex-col pl-5 gap-5 mb-[9rem]">
          <div className="flex items-center">
            <p className="font-semibold text-xl">HAPPY HOUR SPECIAL</p>
            <div className="w-[5rem] h-[2px] bg-black"></div>
          </div>
          <div>
            <h1 className="text-white text-7xl font-bold">Pizza for</h1>
            <h1 className="text-Red-100 text-7xl font-bold">Everyone!</h1>
          </div>
          <p className="text-white font-semibold">
            Extra-virgin olive oil, garlic, mozzarella cheese, onions,
            <br /> mushrooms, black olives, fresh tomatoes.
          </p>
          <button className="bg-Red-100 px-4 py-3 rounded-lg w-[8rem] text-white font-semibold text-sm hover:bg-white hover:border-Red-100 hover:border-[1px] hover:text-Red-100">
            Order Now
          </button>
        </div>
        <PromotionMeal />
      </div>
    </>
  );
}
