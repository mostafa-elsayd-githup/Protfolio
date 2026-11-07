import { GraduationCap, MapPin } from "lucide-react";
import SectionHeader from "../../UI/SectionHeader";
import SectionTitle from "../../UI/SectionTitle";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col gap-5 bg-(--bg-section)/40 border border-(--color-border) p-6 lg:p-8 rounded-3xl backdrop-blur-md shadow-xl w-full"
    >
      <div className="flex flex-col gap-3">
        <SectionHeader header="About Me" />
        <SectionTitle title="Who Am I?" />
        <p className="text-(--color-muted) text-sm lg:text-base leading-relaxed">
          I'm a Frontend Developer specializing in React.js and TypeScript. I
          have a strong foundation in modern web technologies and a passion for
          building scalable and maintainable applications.
          <br /> <br /> I'm always eager to learn new technologies, improve my
          skills, and contribute to innovative projects.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 text-white mt-4">
          <div className="flex items-center gap-3 bg-(--bg-section) text-(--color-muted) py-2 px-4 rounded-2xl border border-(--color-border) flex-1">
            <GraduationCap
              size={32}
              className="text-(--color-primary) shrink-0"
            />
            <div className="flex flex-col">
              <h6 className="font-semibold text-(--color-text)">Education</h6>
              <p className="text-xs">Bachelor of Information Systems</p>
              <span className="text-[11px] text-(--color-muted)">
                (2022 - 2026)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-(--bg-section) text-(--color-muted) py-3 px-4 rounded-2xl border border-(--color-border) sm:w-auto">
            <MapPin size={28} className="text-(--color-primary) shrink-0" />
            <div>
              <h6 className="font-semibold text-(--color-text)">Location</h6>
              <p className="text-xs text-(--color-muted)">Cairo, Egypt</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
