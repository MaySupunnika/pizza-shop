"use client";

import React, { useState } from "react";
import Loading from "../components/Loading";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const clickLogin = () => {
    setLoading(true);
    router.push("/login");
  };

  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    dob: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email invalid").required("Email is Required"),
    password: Yup.string().required("Password is Required"),
    dob: Yup.date()
      .max(new Date(), "Date of birth cannot be in the future")
      .required("Date of birth is Required"),
    name: Yup.string()
      .matches(
        /^[a-zA-Zก-๙0-9]+$/,
        "Name must contain letters, numbers, and Thai characters only"
      )
      .required("Name is Required"),
    username: Yup.string()
      .matches(
        /^[a-zA-Zก-๙0-9]+$/,
        "Username must contain letters, numbers, and Thai characters only"
      )
      .required("Username is Required"),
  });

  const clickRegister = async (values) => {
    const data = {
      name: values.name,
      username: values.username,
      email: values.email,
      password: values.password,
      dob: values.dob,
    };

    try {
      console.log("Sending data", data); // แสดงข้อมูลที่คุณกำลังส่ง
      const response = await axios.post("/api/register", data);
      if (response.data) {
        console.log("Register successfully", response.data);
        setLoading(true);
        router.push("/login");
      }
    } catch (error) {
      console.log("register error", error); // แสดงข้อความของข้อผิดพลาด
    }
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="bg-[url('https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/pizza-home.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvcGl6emEtaG9tZS5qcGciLCJpYXQiOjE2OTg3NDk0MzMsImV4cCI6MTczMDI4NTQzM30.mII-gGXcsT9OoZAKLOUybv8lCd6ZBEF0_ofEyALdZp8&t=2023-10-31T10%3A50%3A34.200Z')] bg-cover w-screen h-screen flex justify-center items-center">
        <div className="w-[30rem] bg-white">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={clickRegister}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="relative mt-6">
                  <label htmlFor="name" className="ml-12 font-medium">
                    Name
                  </label>
                  <br />
                  <Field
                    type="name"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className={`ml-12 py-2 pr-4 px-3 border-2 border-black w-[80%] focus:outline-none ${
                      errors.name && touched.name
                        ? "border-Red-100 border-1"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-Red-100 text-xs absolute ml-12"
                  />
                  {errors.name && touched.name ? (
                    <img
                      src="https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/warning.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvd2FybmluZy5wbmciLCJpYXQiOjE2OTg4MTM3ODQsImV4cCI6MTczMDM0OTc4NH0.ZIFE7xQL31ArpmYVBVBkB5Gv80vO0PUn-qOsVWyeNhk&t=2023-11-01T04%3A43%3A04.413Z"
                      alt="errorIcon"
                      className="absolute top-[60%] right-[13%] w-[1rem] h-[1rem]"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="relative mt-6">
                  <label htmlFor="username" className="ml-12 font-medium">
                    Username
                  </label>
                  <br />
                  <Field
                    type="username"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    className={`ml-12 py-2 pr-4 px-3 border-2 border-black w-[80%] focus:outline-none ${
                      errors.username && touched.username
                        ? "border-Red-100 border-1"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-Red-100 text-xs absolute ml-12"
                  />
                  {errors.username && touched.username ? (
                    <img
                      src="https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/warning.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvd2FybmluZy5wbmciLCJpYXQiOjE2OTg4MTM3ODQsImV4cCI6MTczMDM0OTc4NH0.ZIFE7xQL31ArpmYVBVBkB5Gv80vO0PUn-qOsVWyeNhk&t=2023-11-01T04%3A43%3A04.413Z"
                      alt="errorIcon"
                      className="absolute top-[60%] right-[13%] w-[1rem] h-[1rem]"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="relative mt-6">
                  <label htmlFor="email" className="ml-12 font-medium">
                    Email
                  </label>
                  <br />
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className={`ml-12 py-2 pr-4 px-3 border-2 border-black w-[80%] focus:outline-none ${
                      errors.email && touched.email
                        ? "border-Red-100 border-1"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-Red-100 text-xs absolute ml-12"
                  />
                  {errors.email && touched.email ? (
                    <img
                      src="https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/warning.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvd2FybmluZy5wbmciLCJpYXQiOjE2OTg4MTM3ODQsImV4cCI6MTczMDM0OTc4NH0.ZIFE7xQL31ArpmYVBVBkB5Gv80vO0PUn-qOsVWyeNhk&t=2023-11-01T04%3A43%3A04.413Z"
                      alt="errorIcon"
                      className="absolute top-[60%] right-[13%] w-[1rem] h-[1rem]"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="relative mt-6">
                  <label htmlFor="password" className="ml-12 font-medium">
                    Password
                  </label>
                  <br />
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className={`ml-12 py-2 pr-4 px-3 border-2 border-black w-[80%] focus:outline-none ${
                      errors.password && touched.password
                        ? "border-Red-100 border-1"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-Red-100 text-xs absolute ml-12"
                  />
                  {errors.password && touched.password ? (
                    <img
                      src="https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/warning.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvd2FybmluZy5wbmciLCJpYXQiOjE2OTg4MTM3ODQsImV4cCI6MTczMDM0OTc4NH0.ZIFE7xQL31ArpmYVBVBkB5Gv80vO0PUn-qOsVWyeNhk&t=2023-11-01T04%3A43%3A04.413Z"
                      alt="errorIcon"
                      className="absolute top-[60%] right-[13%] w-[1rem] h-[1rem]"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="relative mt-6">
                  <label htmlFor="dob" className="ml-12 font-medium">
                    Date Of Birth
                  </label>
                  <br />
                  <Field
                    type="date"
                    id="dob"
                    name="dob"
                    className={`ml-12 py-2 pr-4 px-3 border-2 border-black w-[80%] focus:outline-none ${
                      errors.dob && touched.dob ? "border-Red-100 border-1" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="dob"
                    component="div"
                    className="text-Red-100 text-xs absolute ml-12"
                  />
                  {/* {errors.dob && touched.dob ? (
                    <img
                      src="https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/warning.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvd2FybmluZy5wbmciLCJpYXQiOjE2OTg4MTM3ODQsImV4cCI6MTczMDM0OTc4NH0.ZIFE7xQL31ArpmYVBVBkB5Gv80vO0PUn-qOsVWyeNhk&t=2023-11-01T04%3A43%3A04.413Z"
                      alt="errorIcon"
                      className="absolute top-[60%] right-[13%] w-[1rem] h-[1rem]"
                    />
                  ) : (
                    ""
                  )} */}
                </div>
                <div className="flex justify-center mt-10">
                  <button
                    type="submit"
                    className="bg-Red-100 px-4 py-3 rounded-lg h-[3rem] w-[8rem] text-white font-semibold text-sm hover:bg-white hover:border-Red-100 hover:border-[1px] hover:text-Red-100"
                  >
                    REGISTER
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <p className="ml-5 mb-5 mt-3">
            If you have an account?
            <span
              className="text-Red-100 font-semibold cursor-pointer pl-3"
              onClick={clickLogin}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
