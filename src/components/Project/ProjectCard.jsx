import { motion } from "framer-motion";
import github from "@/assets/icons/github.png";
import budgetBay from "@/assets/backgrounds/budgetBay.png";
import spotlight from "@/assets/backgrounds/spotlight5.png";
import styles from "./Project.module.css"

// TODO: Improve loading state handling for images to enhance user experience.

export default function ProjectCard({index, title, desc, img, link}){
    return (
        <>
            <li className="bg-[#121212] p-2 md:p-4 rounded-xl mb-4 border border-[#252525]">
                <div className="p-4 md:p-16 text-white rounded-lg text-start bg-[#181818] border border-[#303030]">
                    <div className="mb-4 space-y-4">
                        <h1 className="text-2xl font-bold md:text-4xl">{title}</h1>
                        <p className="text-[#606060]">{desc}</p>
                        <motion.div 
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="relative flex justify-end ">
                            <img className="object-contain w-full h-full rounded-lg" src={img} alt="" />
                            <div className="absolute inset-0 top-0 w-full rounded-lg bg-gradient-to-b from-transparent to-[#181818] flex justify-center items-center">
                                <a className="flex items-center p-2 space-x-2 font-bold rounded-lg glass-effect" href={link} target="_blank">
                                    <img className="object-cover h-[32px] w-[32px rounded-full" src={github} alt="" />
                                    <p>Github</p>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
           </li>
           
        </>
    );
}




{/* <li id={`card${index + 1}`} className={`${styles.card} p-4 pt-16 rounded-xl`}>
    <div className="w-full p-8 space-y-5 text-white rounded-lg text-start glass-effect">
        <h1 className="text-2xl font-bold md:text-5xl">{title}</h1>
        <p className="text-gray-400">{desc}</p>
        <div className="relative">
            <img className="rounded-lg h-full md:h-[500px] w-full object-contain" src={img} alt="" />
            <div className="absolute inset-0 top-0 w-full rounded-lg bg-gradient-to-b from-transparent to-[#121212] flex justify-center items-center">
                <a className="flex items-center p-2 space-x-2 font-bold rounded-lg glass-effect" href={link} target="_blank">
                    <img className="object-cover h-[32px] w-[32px rounded-full" src={github} alt="" />
                    <p>Github</p>
                </a>
            </div>
        </div>
    </div>
</li> */}