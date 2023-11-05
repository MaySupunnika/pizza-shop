"use client";

// import React, { useState } from "react";
// import Navbar from "../components/Navbar";

// export default function page({ cartItem }) {
//   const [count, setCount] = useState(0);
//   const increseCount = () => {
//     setCount(count + 1);
//   };
//   const decreseCount = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };
//   return (
//     <>
//       <Navbar />
//       <div className='bg-[url("https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/about-page.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvYWJvdXQtcGFnZS5qcGciLCJpYXQiOjE2OTg5MzQ0MDQsImV4cCI6MTczMDQ3MDQwNH0.1CRtUXEmLucmgCq7JhmyftDg2td8aqsnPWksborRDMQ&t=2023-11-02T14%3A13%3A24.266Z")] bg-cover bg-top h-[30rem]'>
//         <div className="relative w-[100%] h-[100%] bg-second">
//           <h1 className="text-white font-extrabold text-6xl flex justify-center pt-[20rem] underline">
//             CART
//           </h1>
//         </div>
//       </div>
//       <div className="bg-white pt-[5rem] pb-[5rem]">
//         <div className="flex justify-center">
//           <table className="w-[85%]">
//             <thead className="h-[45px] bg-Gray-400">
//               <tr>
//                 <th className="w-[20px]"></th>
//                 <th className="w-[50px]"></th>
//                 <th className="w-[50px] text-start">PRODUCT</th>
//                 <th className="w-[50px] text-start">PRICE</th>
//                 <th className="w-[50px] text-start">QUANTITY</th>
//                 <th className="w-[30px] text-start">SUBTOTAL</th>
//               </tr>
//             </thead>
//             <tbody className="border-b border-Gray-400">
//               {cartItem.map((item, index) => (
//                 <tr key={index}>
//                   <td className="pt-3 pb-3 pl-5">
//                     <div className="w-[1.5rem] h-[1.5rem]">
//                       <img
//                         className="cursor-pointer"
//                         src="https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/trash-bin.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvdHJhc2gtYmluLnBuZyIsImlhdCI6MTY5OTE2MDQxMywiZXhwIjoxNzMwNjk2NDEzfQ.DyrcPT-VFtWGfKrKu4zrPJ4Bo99U0eqRaJnYDbroNTk&t=2023-11-05T05%3A00%3A14.809Z"
//                       />
//                     </div>
//                   </td>

//                   <td className="pt-3 pb-3">{item.image}</td>
//                   <td className="pt-3 pb-3">{item.name}</td>
//                   <td className="pt-3 pb-3">{item.price} ฿</td>
//                   <td className="pt-3 pb-3">
//                     <div className="flex w-[50px]">
//                       <p
//                         className="bg-Red-100 rounded-lg px-2 text-white font-semibold text-lg cursor-pointer"
//                         onClick={increseCount}
//                       >
//                         +
//                       </p>
//                       <p className="mx-5 w-[20px]">{count}</p>
//                       <p
//                         className="bg-Red-100 rounded-lg px-2 text-white font-semibold text-lg cursor-pointer"
//                         onClick={decreseCount}
//                       >
//                         -
//                       </p>
//                     </div>
//                   </td>
//                   <td className="pt-6 pb-6">{item.price * count} ฿</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function page({ cartItem }) {
  // สร้าง state สำหรับจำนวนของแต่ละรายการสินค้า
  console.log(cartItem);
  const [itemQuantities, setItemQuantities] = useState({});

  const increaseCount = (itemId) => {
    setItemQuantities({
      ...itemQuantities,
      [itemId]: (itemQuantities[itemId] || 0) + 1,
    });
  };

  const decreaseCount = (itemId) => {
    if (itemQuantities[itemId] > 0) {
      setItemQuantities({
        ...itemQuantities,
        [itemId]: itemQuantities[itemId] - 1,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className='bg-[url("https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/about-page.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvYWJvdXQtcGFnZS5qcGciLCJpYXQiOjE2OTg5MzQ0MDQsImV4cCI6MTczMDQ3MDQwNH0.1CRtUXEmLucmgCq7JhmyftDg2td8aqsnPWksborRDMQ&t=2023-11-02T14%3A13%3A24.266Z")] bg-cover bg-top h-[30rem]'>
        <div className="relative w-[100%] h-[100%] bg-second">
          <h1 className="text-white font-extrabold text-6xl flex justify-center pt-[20rem] underline">
            CART
          </h1>
        </div>
      </div>
      <div className="bg-white pt-[5rem] pb-[5rem]">
        <div className="flex justify-center">
          <table className="w-[85%]">
            <thead className="h-[45px] bg-Gray-400">
              <tr>
                <th className="w-[20px]"></th>
                <th className="w-[50px]"></th>
                <th className="w-[50px] text-start">PRODUCT</th>
                <th className="w-[50px] text-start">PRICE</th>
                <th className="w-[50px] text-start">QUANTITY</th>
                <th className="w-[30px] text-start">SUBTOTAL</th>
              </tr>
            </thead>
            <tbody className="border-b border-Gray-400">
              {cartItem &&
                cartItem.map((item) => (
                  <tr key={item.id}>
                    <td className="pt-3 pb-3 pl-5">
                      <div className="w-[1.5rem] h-[1.5rem]">
                        <img
                          className="cursor-pointer"
                          src="https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/trash-bin.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvdHJhc2gtYmluLnBuZyIsImlhdCI6MTY5OTE2MDQxMywiZXhwIjoxNzMwNjk2NDEzfQ.DyrcPT-VFtWGfKrKu4zrPJ4Bo99U0eqRaJnYDbroNTk&t=2023-11-05T05%3A00%3A14.809Z"
                        />
                      </div>
                    </td>

                    <td className="pt-3 pb-3">{item.image}</td>
                    <td className="pt-3 pb-3">{item.name}</td>
                    <td className="pt-3 pb-3">{item.price} ฿</td>
                    <td className="pt-3 pb-3">
                      <div className="flex w-[50px]">
                        <p
                          className="bg-Red-100 rounded-lg px-2 text-white font-semibold text-lg cursor-pointer"
                          onClick={() => increaseCount(item.id)}
                        >
                          +
                        </p>
                        <p className="mx-5 w-[20px]">
                          {itemQuantities[item.id] || 0}
                        </p>
                        <p
                          className="bg-Red-100 rounded-lg px-2 text-white font-semibold text-lg cursor-pointer"
                          onClick={() => decreaseCount(item.id)}
                        >
                          -
                        </p>
                      </div>
                    </td>
                    <td className="pt-6 pb-6">
                      {item.price * (itemQuantities[item.id] || 0)} ฿
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
