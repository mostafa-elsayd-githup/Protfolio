import { ArrowRight, Mail } from "lucide-react";
import { FaCode, FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FloatingBadge } from "./FloatingBadge";
import { useScrollStore } from "../../store/useScrollStore";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  hoverScale,
  slideInLeft,
  slideInRight,
} from "../../animations/Variants";
import { RiTailwindCssFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import AvailableStauts from "../UI/AvailableStauts";

function Hero() {
  const { scrollToSection } = useScrollStore();
  const ROLES = [
    "Frontend Developer",
    "React & TypeScript",
    "TypeScript Enthusiast",
  ];
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2800);
    return () => clearInterval(id);
  }, [ROLES.length, reduce]);
  return (
    <section
      className="lg:container lg:m-auto flex items-center justify-around flex-col-reverse text-sm md:text-xl md:flex-row gap-5 p-5 pt-30 bg-[url('/bg-heroSection.png')] bg-cover bg-center bg-no-repeat"
      id="home"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInLeft}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-4">
          <span className=" py-2 px-4 text-sm w-fit bg-(--bg-section) text-(--color-text) rounded-3xl border border-transparent [background:linear-gradient(var(--bg-section),var(--bg-section))_padding-box,linear-gradient(to_right,var(--color-primary),var(--color-accent))_border-box] shadow-lg">
            👋 Hello, I'm
          </span>
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl lg:text-7xl text-(--color-text) font-extrabold">
              Mostafa <span className="text-(--color-primary)">Elsayd</span>
            </h1>
            <h2 className="relative h-9 overflow-hidden text-sm md:text-md lg:text-2xl text-(--color-muted) font-semibold ">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={ROLES[index]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute block"
                >
                  {ROLES[index]}
                </motion.span>
              </AnimatePresence>
            </h2>
          </div>
          <p className="text-sm lg:text-md text-(--color-muted) tracking-wide leading-7">
            I build modern, fast and user-friendly web application
            <br /> with a passion for clean code and great UX
          </p>
        </div>
        <div className="my-5 flex items-center gap-4">
          <motion.button
            initial="initial"
            whileHover="hover"
            variants={hoverScale}
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer text-sm md:text-md flex items-center text-(--color-text) gap-2 py-2 px-2 md:px-4 bg-linear-to-r from-(--color-accent) from-10% via-(--color-primary) to-blue-700 rounded-3xl "
          >
            <span>View Projects</span>
            <ArrowRight className="inline" size={17} />
          </motion.button>
          <motion.button
            initial="initial"
            whileHover="hover"
            variants={hoverScale}
            onClick={() => scrollToSection("contact")}
            className=" group cursor-pointer text-sm md:text-md flex items-center text-(--color-text) gap-2 py-2 px-2 md:px-4 bg-transparent rounded-3xl border border-transparent [background:linear-gradient(var(--bg-section),var(--bg-section))_padding-box,linear-gradient(to_right,var(--color-primary),var(--color-accent))_border-box]"
          >
            <span>Contact Me</span>{" "}
            <Mail
              className="inline text-(--color-muted) group-hover:text-(--color-text) transition-colors duration-300 "
              size={17}
            />
          </motion.button>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/mostafa-elsayd-githup"
            target="_blank"
            className="bg-(--bg-section) rounded-full p-2 md-p-3 cursor-pointer"
          >
            <FaGithub className="text-2xl text-(--color-muted) hover:text-(--color-accent) transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/mostafa-elsayd-a4b793430?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            className="bg-(--bg-section) rounded-full p-2 md-p-3 cursor-pointer"
          >
            <FaLinkedinIn className="text-2xl text-(--color-muted) hover:text-(--color-accent) transition-colors" />
          </a>
          <AvailableStauts isAvailable={false} />
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInRight}
        viewport={{ once: true }}
        className="relative flex justify-center items-center rounded-3xl overflow-hidden"
      >
        <img
          className="w-72 md:w-90 object-cover relative z-10"
          src="/mostafa elsayd.png"
          alt="Mostafa Elsayd"
        />

        <FloatingBadge
          icon={<FaReact />}
          className="absolute top-6 left-6 z-25 w-11 h-11  bg-(--bg-section)/80  border border-(--color-ReactIcon)/40 shadow-cyan-500/20 text-(--color-ReactIcon) -rotate-12 animate-bounce [animation-duration:2s]"
        />

        <FloatingBadge
          icon={<SiTypescript />}
          className="absolute top-12 right-6 z-25 w-11 h-11 text-(--color-text)  bg-(--color-tsIcon) border border-(--color-border)/50  shadow-blue-600/30 font-bold text-sm rotate-15 -rotate-y-20 animate-bounce [animation-duration:2.1s]"
        />

        <FloatingBadge
          icon={<FaCode />}
          className="absolute top-32 right-2 z-20  w-12 h-12  bg-(--bg-section)/80 border border-(--color-border)/60  text-(--color-muted) rotate-[-10deg] animate-bounce [animation-duration:2.4s]"
        />
        <FloatingBadge
          icon={<RiTailwindCssFill />}
          className="absolute top-32 left-2 z-20  w-11 h-11 text-(--color-tsIcon)/80 border border-(--color-border)/60  bg-(--color-text)/90 rotate-[-10deg] animate-bounce [animation-duration:2.1s]"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
