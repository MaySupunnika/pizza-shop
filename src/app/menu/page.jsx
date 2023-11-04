"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function page() {
  const [boxsetData, setBoxsetData] = useState([]);
  const [pizzaData, setPizzaData] = useState([]);
  const [hamburgerData, setHamburgerData] = useState([]);
  const [drinkData, setDrinkData] = useState([]);

  const fetchMenuData = async () => {
    try {
      const boxsetResponse = await axios.get("/api/menu/boxset");
      setBoxsetData(boxsetResponse.data);
      // console.log(boxsetResponse);
      const pizzaResponse = await axios.get("/api/menu/pizza");
      setPizzaData(pizzaResponse.data);
      // console.log(pizzaResponse);
      const hamburgerResponse = await axios.get("api/menu/hamburger");
      setHamburgerData(hamburgerResponse.data);
      // console.log(hamburgerResponse);
      const drinkResponse = await axios.get("api/menu/drink");
      setDrinkData(drinkResponse.data);
      // console.log(drinkResponse);
    } catch (error) {
      console.log("Error getting boxset data", error);
    }
  };

  useEffect(() => {
    fetchMenuData();
  }, []);
  return (
    <>
      <Navbar />
      <div className='bg-[url("https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/about-page.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvYWJvdXQtcGFnZS5qcGciLCJpYXQiOjE2OTg5MzQ0MDQsImV4cCI6MTczMDQ3MDQwNH0.1CRtUXEmLucmgCq7JhmyftDg2td8aqsnPWksborRDMQ&t=2023-11-02T14%3A13%3A24.266Z")] bg-cover bg-top h-[30rem]'>
        <div className="relative w-[100%] h-[100%] bg-second">
          <h1 className="text-white font-extrabold text-6xl flex justify-center pt-[20rem] underline">
            MENU
          </h1>
        </div>
      </div>
      <div className="bg-white pt-[5rem] pb-[5rem]">
        <div>
          <h2 className="text-Red-100 text-2xl font-semibold my-[2rem]">
            BOX SET
          </h2>
          <div className="grid grid-cols-4 gap-4 ml-8">
            {boxsetData.map((item, index) => (
              <div
                className="border border-Gray-300 rounded-xl w-[18rem] h-[25rem] flex flex-col items-center hover:bg-Gray-400"
                key={index}
              >
                <img
                  src={item.image}
                  className="w-[16.5rem] h-[15rem] rounded-xl object-cover mt-[0.5rem]"
                />
                <div className="flex flex-col w-[90%] mt-3">
                  <h4 className="text-xl font-semibold">{item.name}</h4>
                  <p className="text-Gray-100 text-sm">{item.description}</p>
                  <div className="flex justify-between mt-[1rem]">
                    <p className="text-Red-100 text-xl font-semibold mt-2">
                      {item.price} ฿
                    </p>
                    <img
                      src="https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/add-to-cart.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvYWRkLXRvLWNhcnQucG5nIiwiaWF0IjoxNjk5MTA1MDIxLCJleHAiOjE3MzA2NDEwMjF9.aZiHuOABaMUaRATCI6LPTlxqM_9Jk2z2TMR0etCpilY&t=2023-11-04T13%3A37%3A01.634Z"
                      className="w-[2rem] h-[2rem] cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-Red-100 text-2xl font-semibold my-[2rem]">
            PIZZA
          </h2>
          <div className="grid grid-cols-4 gap-4 ml-8">
            {pizzaData.map((item, index) => (
              <div
                className="border border-Gray-300 rounded-xl w-[18rem] h-[25rem] flex flex-col items-center hover:bg-Gray-400"
                key={index}
              >
                <img
                  src={item.image}
                  className="w-[16.5rem] h-[15rem] rounded-xl object-cover mt-[0.5rem]"
                />
                <div className="flex flex-col w-[90%] mt-3">
                  <h4 className="text-xl font-semibold">{item.name}</h4>
                  <p className="text-Gray-100 text-sm">{item.description}</p>
                  <div className="flex justify-between mt-[1rem]">
                    <p className="text-Red-100 text-xl font-semibold mt-2">
                      {item.price} ฿
                    </p>
                    <img
                      src="https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/add-to-cart.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvYWRkLXRvLWNhcnQucG5nIiwiaWF0IjoxNjk5MTA1MDIxLCJleHAiOjE3MzA2NDEwMjF9.aZiHuOABaMUaRATCI6LPTlxqM_9Jk2z2TMR0etCpilY&t=2023-11-04T13%3A37%3A01.634Z"
                      className="w-[2rem] h-[2rem] cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-Red-100 text-2xl font-semibold my-[2rem]">
            HAMBURGER
          </h2>
          <div className="grid grid-cols-4 gap-4 ml-8">
            {hamburgerData.map((item, index) => (
              <div
                className="border border-Gray-300 rounded-xl w-[18rem] h-[25rem] flex flex-col items-center hover:bg-Gray-400"
                key={index}
              >
                <img
                  src={item.image}
                  className="w-[16.5rem] h-[15rem] rounded-xl object-cover mt-[0.5rem]"
                />
                <div className="flex flex-col w-[90%] mt-3">
                  <h4 className="text-xl font-semibold">{item.name}</h4>
                  <p className="text-Gray-100 text-sm">{item.description}</p>
                  <div className="flex justify-between mt-[1rem]">
                    <p className="text-Red-100 text-xl font-semibold mt-2">
                      {item.price} ฿
                    </p>
                    <img
                      src="https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/add-to-cart.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvYWRkLXRvLWNhcnQucG5nIiwiaWF0IjoxNjk5MTA1MDIxLCJleHAiOjE3MzA2NDEwMjF9.aZiHuOABaMUaRATCI6LPTlxqM_9Jk2z2TMR0etCpilY&t=2023-11-04T13%3A37%3A01.634Z"
                      className="w-[2rem] h-[2rem] cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-Red-100 text-2xl font-semibold my-[2rem]">
            DRINK
          </h2>
          <div className="grid grid-cols-4 gap-4 ml-8">
            {drinkData.map((item, index) => (
              <div
                className="border border-Gray-300 rounded-xl w-[18rem] h-[25rem] flex flex-col items-center hover:bg-Gray-400"
                key={index}
              >
                <img
                  src={item.image}
                  className="w-[16.5rem] h-[15rem] rounded-xl object-cover mt-[0.5rem]"
                />
                <div className="flex flex-col w-[90%] mt-3">
                  <h4 className="text-xl font-semibold">{item.name}</h4>
                  <p className="text-Gray-100 text-sm">{item.description}</p>
                  <div className="flex justify-between mt-[1rem]">
                    <p className="text-Red-100 text-xl font-semibold mt-2">
                      {item.price} ฿
                    </p>
                    <img
                      src="https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/add-to-cart.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvYWRkLXRvLWNhcnQucG5nIiwiaWF0IjoxNjk5MTA1MDIxLCJleHAiOjE3MzA2NDEwMjF9.aZiHuOABaMUaRATCI6LPTlxqM_9Jk2z2TMR0etCpilY&t=2023-11-04T13%3A37%3A01.634Z"
                      className="w-[2rem] h-[2rem] cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
