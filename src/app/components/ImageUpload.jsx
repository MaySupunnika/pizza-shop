"use client";

import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

function ImageUpload({ updateInfo, setImageUrls, handleImageChange }) {
  const [previewImageUrl, setPreviewImageUrl] = useState(null);
  const onupload = function (result) {
    if (typeof updateInfo === "function") {
      if (result && result.info.secure_url) {
        const newImageUrl = result.info.secure_url;
        setImageUrls((preImageUrls) => [...preImageUrls, newImageUrl]);
        updateInfo(result.info.secure_url);
        handleImageChange(result);
        setPreviewImageUrl(result.info.secure_url);
      }
    }
    console.log(result);
  };
  if (previewImageUrl) {
    return (
      <div>
        <h2>Preview Image</h2>
        <div className="w-[15rem] h-[20rem] bg-Red-100 relative">
          <img
            className="w-full h-full object-cover absolute z-20"
            src={previewImageUrl}
            alt="Uploaded Image Preview"
          />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="mb-10">
        <CldUploadWidget uploadPreset="mxosxqdr" onUpload={onupload}>
          {function ({ open }) {
            function handleOnclick(e) {
              e.preventDefault();
              open();
            }
            return (
              <button
                className="border-[1px] rounded-lg p-1 px-2"
                onClick={handleOnclick}
              >
                Upload An Image
              </button>
            );
          }}
        </CldUploadWidget>
      </div>
      {/* <div>
        <h2>Preview Image</h2>
        <div className="w-[15rem] h-[20rem] bg-Red-100 relative">
          <img
            className="w-full h-full object-cover absolute z-20"
            src={previewImageUrl}
            alt="Uploaded Image Preview"
          />
        </div>
      </div> */}
    </div>
  );
}

export default ImageUpload;
