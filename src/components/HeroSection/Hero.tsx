import { ArrowRight, Mail } from "lucide-react";
import { FaCode, FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FloatingBadge } from "./FloatingBadge";
import { useScrollStore } from "../../store/useScrollStore";
function Hero() {
  const { scrollToSection } = useScrollStore();
  return (
    <main className="mt-20">
      <section
        className="flex items-center justify-around flex-col-reverse text-sm md:text-xl md:flex-row gap-5 pt-10 px-10 "
        id="home"
      >
        <div>
          <div className="flex flex-col gap-4">
            <span className=" py-2 px-4 w-fit bg-(--bg-section) rounded-3xl border border-transparent [background:linear-gradient(var(--bg-section),var(--bg-section))_padding-box,linear-gradient(to_right,var(--color-primary),var(--color-accent))_border-box] shadow-lg">
              👋 Hello, I'm
            </span>
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl lg:text-7xl font-extrabold">
                Mostafa <span className="text-(--color-primary)">Elsayd</span>
              </h1>
              <h2 className="text-lg lg:text-3xl text-(--color-muted)">
                Frontend Developer | React | TypeScript
              </h2>
            </div>
            <p className="text-sm lg:text-lg text-(--color-muted) tracking-wide leading-8">
              I build modern, fast and user-friendly web application
              <br /> with a passion for clean code and great UX
            </p>
          </div>
          <div className="my-5 flex items-center gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="cursor-pointer text-sm md:text-md flex items-center gap-2 py-2 px-2 bg-linear-to-r from-(--color-accent) from-10% via-(--color-primary) to-blue-700 rounded-3xl "
            >
              <span>View Projects</span>
              <ArrowRight className="inline" size={17} />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer text-sm md:text-md flex items-center gap-2 py-2 px-2 bg-transparent rounded-3xl border border-transparent [background:linear-gradient(var(--bg-section),var(--bg-section))_padding-box,linear-gradient(to_right,var(--color-primary),var(--color-accent))_border-box]"
            >
              <span>Contact Me</span> <Mail className="inline" size={17} />
            </button>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/mostafa-elsayd-githup"
              target="_blank"
              className="bg-(--bg-section) rounded-full p-3 cursor-pointer"
            >
              <FaGithub className="text-2xl text-slate-300 hover:text-(--color-accent) transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/mostafa-elsayd-a4b793430?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              className="bg-(--bg-section) rounded-full p-3 cursor-pointer"
            >
              <FaLinkedinIn className="text-2xl text-slate-300 hover:text-(--color-accent) transition-colors" />
            </a>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <img
            className="w-72 md:w-90 object-cover relative z-10"
            src="/mostafa-portrait-cropped.png"
            alt="Mostafa Elsayd"
          />

          <FloatingBadge
            icon={<FaReact />}
            className="absolute top-6 left-6 z-25 w-11 h-11  bg-slate-900/80  border border-cyan-500/40 shadow-cyan-500/20 text-cyan-400 -rotate-12"
          />

          <FloatingBadge
            icon={<SiTypescript />}
            className="absolute top-12 right-6 z-25 w-11 h-11  bg-blue-600/90  border border-blue-400/50  shadow-blue-600/30 font-bold text-sm rotate-15 -rotate-y-20"
          />

          <FloatingBadge
            icon={<FaCode />}
            className="absolute top-32 right-2 z-20  w-12 h-12  bg-slate-900/80  border border-slate-700/60  text-slate-300 rotate-[-10deg]"
          />
        </div>
      </section>
    </main>
  );
}

export default Hero;
