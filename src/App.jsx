/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Introduction from "./components/Introduction/Introduction";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Tools from "./components/Tools/Tools";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Introduction />
      <Project />
      <Tools />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
