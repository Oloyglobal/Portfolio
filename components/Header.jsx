"use client"
import { motion } from "framer-motion"

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 4,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.09,
    },
  },
}

const letter = {
  hidden: {
    opacity: 0,
    x: () => Math.random() * 200 - 100,
    y: () => Math.random() * 200 - 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
}

export default function Header() {
  const text1 = "I am Oloyede Olaniyi the C.E.O O'Loy Global Tech "
  const text2 = ""
  const text3 = "Full-Stack Developer with a passion for crafting "
  const text4 = "innovative solutions and thriving in collaborative team environments."
    const text5 = "I am a passionate developer with a strong focus on"
    const text6 = "creating exceptional user experiences and delivering high-quality code."


  return (
    <div className=" w-[40vw] sm:w-[100vw] text-center  sm:pb-[200px]  items-start ">
      <motion.h1
        className="text-shadow-violet-300 font-extrabold sm:text-start text-center  sm:text-3xl text  "
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {text1.split("").map((char, i) => (
          <motion.span key={char + i} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.h1
        className="text-green-400  font-serif  sm:text-2xl  sm:text-start text-center   font-stretch-condensed font-bold mt-2"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {text2.split("").map((char, i) => (
          <motion.span key={char + i} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.h1
        className="text-white  font-serif sm:text-start text-center  sm:text-xl  font-bold mt-2"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {text3.split("").map((char, i) => (
          <motion.span key={char + i} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.h1
        className="text-white  font-serif sm:text-start text-center  sm:text-xl  font-bold mt-2"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {text4.split("").map((char, i) => (
          <motion.span key={char + i} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.h1
        className="text-white  font-serif sm:text-start text-center  sm:text-xl text-xl font-bold mt-2"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {text5.split("").map((char, i) => (
          <motion.span key={char + i} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.h1
        className="text-white  font-serif sm:text-start text-center  sm:text-xl text-xl font-bold mt-2"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {text6.split("").map((char, i) => (
          <motion.span key={char + i} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

    


    </div>
  )
}
