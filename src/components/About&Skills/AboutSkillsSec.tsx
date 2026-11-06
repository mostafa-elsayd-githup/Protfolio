import About from "./About/About";
import Skills from "./Skills/Skills";
import { motion } from "framer-motion";
import { slideInRight, slideInLeft } from "../../animations/Variants";
function AboutSkillsSec() {
  return (
    <section id="about-skills" className="my-20 mx-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideInLeft}
          viewport={{once:true}}
          className="w-full flex border-b pb-8 lg:border-b-0 lg:border-r lg:pr-5 border-(--color-border) "
        >
          <About />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideInRight}
          viewport={{once:true}}
          className="w-full flex"
        >
          <Skills />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSkillsSec;
