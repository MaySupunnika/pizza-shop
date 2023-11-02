import React from "react";

const data = [
  {
    id: 1,
    image:
      "https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/fast-delivery.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvZmFzdC1kZWxpdmVyeS5wbmciLCJpYXQiOjE2OTg3NzAzNjEsImV4cCI6MTczMDMwNjM2MX0.-f_xL0lZmBqvg92-miMOR8XMvkszJzLB32xJI1UsLp4&t=2023-10-31T16%3A39%3A22.283Z",
    title: "Free Shipping",
    description: "Sign up for updates and get free shipping",
  },
  {
    id: 2,
    image:
      "https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/box.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvYm94LnBuZyIsImlhdCI6MTY5ODc3MDUxMiwiZXhwIjoxNzMwMzA2NTEyfQ.Oth-D1LUKmeAOaZzcB_zEHjOnV8bU1anakOAwmXLmrM&t=2023-10-31T16%3A41%3A52.814Z",
    title: "30 Minutes Delivery",
    description: "Goods will be delivered quickly to your place",
  },
  {
    id: 3,
    image:
      "https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/customer-service.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvY3VzdG9tZXItc2VydmljZS5wbmciLCJpYXQiOjE2OTg3NzE1NzYsImV4cCI6MTczMDMwNzU3Nn0.UQtti8hn1OJOI0nzziw8sNl5gALW0VSX8ivTqch-mao&t=2023-10-31T16%3A59%3A36.457Z",
    title: "24h Support",
    description: "We are always ready to take your phone",
  },
  {
    id: 4,
    image:
      "https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/achievement.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvYWNoaWV2ZW1lbnQucG5nIiwiaWF0IjoxNjk4NzcxMjMyLCJleHAiOjE3MzAzMDcyMzJ9.clx2cLadHmpRHkr_RRPyZpKCb6sASBo1XwThgCeybr4&t=2023-10-31T16%3A53%3A52.422Z",
    title: "Best Quality Guarantee",
    description: "Your order will be guarantee to be intact when it arrives",
  },
];

export default function PromotionMeal() {
  return (
    <>
      <div className="h-[36rem] flex justify-center">
        <div className="flex gap-8">
          <div className="flex justify-center w-[518px] h-[540px] rounded-xl bg-[url('https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/burger-1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvYnVyZ2VyLTEucG5nIiwiaWF0IjoxNjk4NzY3MDEwLCJleHAiOjE3MzAzMDMwMTB9.LGIjb4Zg3nFWDINDKLyJSfia8SVaMzm8DBqKOtVngKE&t=2023-10-31T15%3A43%3A30.756Z')] hover:scale-105 duration-200">
            <button className="mt-[13.5rem] bg-Red-100 px-4 py-3 rounded-lg h-[3rem] w-[8rem] text-white font-semibold text-sm hover:bg-white hover:border-Red-100 hover:border-[1px] hover:text-Red-100">
              Order Now
            </button>
          </div>
          <div className="flex flex-col gap-8">
            <div className="pl-6 w-[410px] h-[254px] rounded-xl bg-[url('https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/burger-2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvYnVyZ2VyLTIuanBnIiwiaWF0IjoxNjk4NzY3MjExLCJleHAiOjE3MzAzMDMyMTF9.xZaHO8-sh1HfoNF_IZp-1eAAmwDIS_FbsAXsR8l8SqE&t=2023-10-31T15%3A46%3A52.376Z')] hover:scale-105 duration-200">
              <h3 className="text-Red-100 font-semibold text-4xl mt-8 mb-4">
                Special <span className="text-white">Combo</span>
              </h3>
              <p className="text-white text-xl mb-7">
                This Combo For Online
                <br />
                Order On Today
              </p>
              <button className="bg-Red-100 px-4 py-3 rounded-lg h-[3rem] w-[8rem] text-white font-semibold text-sm hover:bg-white hover:border-Red-100 hover:border-[1px] hover:text-Red-100">
                Order Now
              </button>
            </div>
            <div className="pl-6 w-[410px] h-[254px] rounded-xl bg-[url('https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/burger-3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvYnVyZ2VyLTMuanBnIiwiaWF0IjoxNjk4NzY3MDkzLCJleHAiOjE3MzAzMDMwOTN9.7g6et-Ng9DR7Aw6_nbElo3qNmPSjCGsJsOAWEQ6Xc_k&t=2023-10-31T15%3A44%3A53.710Z')] hover:scale-105 duration-200">
              <h3 className="text-white font-semibold text-4xl mt-8 mb-4">
                New <span className="text-Red-100">Recipe</span>
              </h3>
              <p className="text-white text-xl mb-7">
                Extra-virgin olive oil, garlic, <br />
                mozzarella cheese.
              </p>
              <button className="bg-Red-100 px-4 py-3 rounded-lg h-[3rem] w-[8rem] text-white font-semibold text-sm hover:bg-white hover:border-Red-100 hover:border-[1px] hover:text-Red-100">
                Order Now
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center w-[301px] h-[539px] rounded-xl bg-[url('https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/burger-4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvYnVyZ2VyLTQucG5nIiwiaWF0IjoxNjk4NzY3NjQ5LCJleHAiOjE3MzAzMDM2NDl9.9xwSH1a_twCmw4ACnxn4aszwVb0aNW4HCHwsbCo4Ptw&t=2023-10-31T15%3A54%3A10.298Z')] hover:scale-105 duration-200">
            <p className="text-white text-xl mt-[10rem] mb-5 text-center">
              This campaign applies to
              <br />
              the first 50 customers
            </p>
            <button className="bg-Red-100 px-4 py-3 rounded-lg h-[3rem] w-[8rem] text-white font-semibold text-sm hover:bg-white hover:border-Red-100 hover:border-[1px] hover:text-Red-100">
              Order Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-16">
        {data.map((item) => (
          <div className="flex px-2 py-5" key={item.id}>
            <img className="w-[3rem] h-[3rem] mr-3" src={item.image} />
            <div className="flex flex-col">
              <h5 className="text-xl text-Gray-200 w-[11rem] font-semibold mb-3">
                {item.title}
              </h5>
              <p className="text-Gray-100 w-[12rem]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
