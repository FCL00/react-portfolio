/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="bg-[#181818] h-screen py-16">
      <div className="container mx-auto px-6 flex">
        {/* left */}
        <div className="w-1/2 flex flex-col">
          <h1 className="text-5xl text-white font-bold">
            Hi, I am <span className="text-emerald-500">Fernando Lagahit</span>
          </h1>
          <p className="text-white"></p>
        </div>
        {/* right */}
        <div className="w-1/2 flex justify-center">
          <img
            className="h-1/2 rounded-full"
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
