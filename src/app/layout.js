import Head from "next/head";
import "./globals.css";
import Provider from "./components/Provider";

export const metadata = {
  title: "PIZZA-SHOP",
  description: "Generated by create next app",
  icons: {
    icon: [
      "https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/pizza.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvcGl6emEucG5nIiwiaWF0IjoxNjk4NzQ3OTI2LCJleHAiOjE3MzAyODM5MjZ9.Rekfxc_FOUzB37p_tNcl54lstT4UqItajFdkHyMwcR4&t=2023-10-31T10%3A25%3A26.984Z",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="../app/pizza.ico" />
      </Head>
      <html lang="en">
        <Provider>
          <body>{children}</body>
        </Provider>
      </html>
    </>
  );
}
