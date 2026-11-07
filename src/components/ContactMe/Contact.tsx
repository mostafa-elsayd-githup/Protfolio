import { ArrowRight, GraduationCap, Mail } from "lucide-react";
import SectionHeader from "../UI/SectionHeader";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import CopyrightNotice from "../UI/CopyrightNotice";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "../../animations/Variants";
function Contact() {
  return (
    <footer
      className="mt-20 lg:px-6 lg:container lg:mx-auto bg-[url('/bg-contactSection.png')] bg-cover bg-center bg-no-repeat lg:rounded-2xl"
      id="contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 items-center ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideInLeft}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          <SectionHeader header="Education" />
          <div className="flex items-center justify-between bg-(--bg-section)/60 text-(--color-muted) py-4 px-4 rounded-3xl border border-(--color-border) backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-(--color-primary)/50">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-(--bg-section) border border-(--color-border) rounded-2xl">
                <GraduationCap
                  size={28}
                  className="text-(--color-primary) shrink-0"
                />
              </div>
              <div>
                <h6 className="font-bold text-(--color-text) text-xs md:text-md">
                  Bachelor Of Information Systems
                </h6>
                <p className="text-xs text-(--color-muted) mt-0.5">
                  Higher Institute For Computer Science & MIS
                </p>
              </div>
            </div>

            <div className="text-right border-l border-(--color-border) pl-2 shrink-0">
              <span className="block text-xs font-semibold text-(--color-text)">
                2022 - 2026
              </span>
              <span className="block text-[11px] text-(--color-muted) mt-0.5">
                Cairo, Egypt
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideInRight}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          <SectionHeader header="Contact Me" />
          <p className="text-(--color-muted) text-xs md:text-sm">
            Let's connect! Feel free to reach out for collaborations or
            opportunities.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="mailto:mostafaalsyd809@gmail.com"
              target="_blank"
              className="flex items-center gap-2 bg-linear-to-r from-(--color-accent) via-(--color-primary) to-blue-600 text-white font-medium rounded-full py-3 px-6 shadow-lg shadow-blue-500/20 hover:scale-105 transition-all duration-300 text-xs"
            >
              Send Message <ArrowRight size={16} />
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/mostafa-elsayd-githup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="bg-(--bg-section) border border-(--color-border) rounded-full p-2 text-(--color-muted) hover:text-(--color-primary) hover:border-(--color-primary)/40 transition-all duration-300"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/mostafa-elsayd-a4b793430"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="bg-(--bg-section) border border-(--color-border) rounded-full p-2 text-(--color-muted) hover:text-(--color-primary) hover:border-(--color-primary)/40 transition-all duration-300"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a
                href="mailto:mostafaalsyd809@gmail.com"
                target="_blank"
                aria-label="Email Me"
                className="bg-(--bg-section) border border-(--color-border) rounded-full p-2 text-(--color-muted) hover:text-(--color-primary) hover:border-(--color-primary)/40 transition-all duration-300"
              >
                <Mail className="text-xl" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="mt-5 py-6 border-t border-(--color-border)/20 text-center text-xs text-(--color-muted)"
      >
        <CopyrightNotice />
      </motion.div>
    </footer>
  );
}

export default Contact;
