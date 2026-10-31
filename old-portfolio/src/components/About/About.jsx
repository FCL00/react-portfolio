import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skills } from "@/constants/Data";
import { animations } from "@/assets/animations/animations";
import aboutMe from "@/assets/backgrounds/aboutMe.png";
import artificial from "@/assets/backgrounds/artificial.svg";
import cloud from "@/assets/backgrounds/cloud.png";
import aws from "@/assets/backgrounds/aws.png";
import ui from "@/assets/backgrounds/UI.png";
import image from "@/assets/backgrounds/image.png";
import "./about.css";

// TODO: Replace global about.css with About.module.css to scope styles and avoid global class conflicts

export default function About() {
  return (
    <section className="bg-[#121212]" id="about">
      <div className="container flex flex-col px-6 py-16 mx-auto space-y-3 md:max-w-7xl md:px-9 text-start md:text-center md:py-32">
        <div className="w-full max-w-4xl mx-auto text-white">
          <h1 className="text-3xl font-bold text-white md:text-5xl lg:text-7xl">
            About Me
          </h1>
          <p className="text-lg text-white">
            Full-stack developer passionate about creating clean, 
            functional web  experiences. I love solving problems and bringing ideas to life.
          </p>
        </div>
        <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {/* About Me Card */}
          <div className="lg:col-span-4 bg-[#181818] rounded-md flex flex-col overflow-hidden border border-[#303030]">
            <img
              className="w-full h-[256px] object-cover rounded-t-md"
              src={aboutMe}
              alt="About Me"
              style={{ backgroundSize: "cover", backgroundPosition: "center", objectFit: "cover" }}
              loading="lazy"
            />
            <div className="p-4 space-y-2">
              <h1 className="text-xl font-bold text-white text-start">Hi I'm Fernando Lagahit</h1>
              <p className="text-sm text-[#696969] text-start">
                With 5 years of experience, I have honed my skills in both frontend and backend.
              </p>
            </div>
          </div>

          {/* AWS Cloud Interest Card */}
          <div className="lg:col-span-8 bg-[#181818] rounded-md flex flex-col overflow-hidden border border-[#303030]">
            <div className="flex items-center justify-center w-full h-64 bg-black rounded-t-md">
              <img
                className="object-cover w-full h-full"
                src={aws}
                alt="AWS Cloud"
                loading="lazy"
              />
            </div>
            <div className="p-4 space-y-2">
              <h3 className="mb-2 text-2xl font-semibold text-white text-start">Currently Learning</h3>
              <p className="text-sm text-start text-[#696969]">
                Constantly leveling up! Currently diving deeper into DevOps practices and exploring advanced React architecture patterns.
              </p>
            </div>
          </div>

          {/* UI Design Full Image Card */}
          <div className="lg:col-span-8 bg-[#181818] rounded-lg relative overflow-hidden border border-[#303030]">
            <img
              className="object-cover w-full h-[500px]"
              src={ui}
              alt="UI Design"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/60">
              <h2 className="text-2xl font-semibold text-white">UI/UX Design</h2>
            </div>
          </div>

          {/* Web Design + Learning Card */}
          <div className="lg:col-span-4 rounded-md bg-[#181818] border border-[#303030]">
            <img className="object-cover h-[300px] rounded-t-lg" src={image} alt="" />
            <div className="p-4 space-y-4">
              <h3 className="text-2xl font-semibold text-white text-start">Web Design</h3>
              <p className="text-[#696969] text-start text-sm">
                I enjoy crafting user-centric designs using Figma and implementing them with pixel-perfect precision using modern CSS and Tailwind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
