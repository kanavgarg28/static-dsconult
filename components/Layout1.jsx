import React from "react";
import Footer from "./Footer";
import Header from "./Header";
// import InstagramFeed from "./components/InstagramFeed/InstagramFeed";


export default function Layout1({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}