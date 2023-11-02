"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { getSession, signIn } from "next-auth/react";

export default function page() {
  const router = useRouter();
  const handlerSubmit = async (values) => {
    try {
      const response = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if (response?.error) {
        console.log("response signin error", response.error);
      } else {
        const session = await getSession();
        if (session?.user) {
          if (session.user.role === "user") {
            router.push("/");
          } else {
            router.push("/admin");
          }
        }
      }
    } catch (error) {
      console.log("Login error!!", error);
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email invalid").required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });
  return (
    <>
      <div className="bg-[url('https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/pizza-home.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvcGl6emEtaG9tZS5qcGciLCJpYXQiOjE2OTg3NDk0MzMsImV4cCI6MTczMDI4NTQzM30.mII-gGXcsT9OoZAKLOUybv8lCd6ZBEF0_ofEyALdZp8&t=2023-10-31T10%3A50%3A34.200Z')] bg-cover w-screen h-screen">
        <div className="relative w-[100%] h-[100%] bg-second">
          <div className="flex justify-center items-center w-[100%] h-[100%]">
            <div className="w-[32rem] h-[27rem] bg-white">
              <h2 className="text-Red-100 font-bold text-3xl text-center mt-3">
                PIZZA-SHOP
              </h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handlerSubmit}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="relative mt-10">
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
                          errors.email && touched.email
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
                    <div className="flex justify-center mt-10">
                      <button
                        type="submit"
                        className="bg-Red-100 px-4 py-3 rounded-lg h-[3rem] w-[8rem] text-white font-semibold text-sm hover:bg-white hover:border-Red-100 hover:border-[1px] hover:text-Red-100"
                      >
                        LOGIN
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
              <p className="ml-12 mt-[1rem]">
                Have an account?
                <span className="text-Red-100 cursor-pointer hover:font-semibold">
                  Register
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
