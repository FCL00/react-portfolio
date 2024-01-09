/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact/Contact";
import Tools from "./components/Tools";

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
