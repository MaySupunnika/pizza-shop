import React from "react";

export default function footer() {
  return (
    <>
      <div className="h-[22rem] bg-Gray-200">
        <div className="flex justify-around pt-8">
          <div className="flex flex-col w-[22rem]">
            <h3 className="text-white text-xl font-semibold mb-4">
              Restaurant Info
            </h3>
            <p className="text-white text-sm mb-3">
              Address: Puthamonthon Sai 2, Sala Thammasap Subdistrict, Thawi
              Watthana District, Bangkok
            </p>
            <p className="text-white text-sm mb-3">Phone: +66123456789</p>
            <p className="text-white text-sm">Email: pizza@mail.com</p>
          </div>
          <div className="flex flex-col w-[11.5rem]">
            <h3 className="text-white text-xl font-semibold mb-4">
              Quick Links
            </h3>
            <div className="flex justify-between">
              <div className="flex flex-col gap-3">
                <p className="text-white text-sm">About Us</p>
                <p className="text-white text-sm">Blog</p>
                <p className="text-white text-sm">Contact</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-white text-sm">Menu</p>
                <p className="text-white text-sm">Shop</p>
                <p className="text-white text-sm">Product</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-sm text-xl font-semibold mb-4">
              Openning Hours
            </h3>
            <p className="text-white text-sm mb-3">Monday-Friday: 8am-4pm</p>
            <p className="text-white text-sm mb-3">Saturday: 9am-5pm</p>
            <p className="text-white text-sm">Sunday: 12am-5pm</p>
          </div>
          <div className="flex flex-col w-[17.5rem]">
            <h3 className="text-white text-xl font-semibold mb-4">
              Userful Links
            </h3>
            <div className="flex justify-between">
              <div className="flex flex-col gap-3">
                <p className="text-white text-sm">Special Offers</p>
                <p className="text-white text-sm">Gift Cards</p>
                <p className="text-white text-sm">Privacy Policy</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-white text-sm">Business With Us</p>
                <p className="text-white text-sm">Find A Store</p>
                <p className="text-white text-sm">Team Of Use</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-white opacity-50 mt-[5rem]" />
        <p className="text-white text-sm text-center mt-[4rem]">
          © Copyright 2023 - All Rights Reserved
        </p>
      </div>
    </>
  );
}
