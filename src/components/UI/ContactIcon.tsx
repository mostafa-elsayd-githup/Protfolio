import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function ContactIcons() {
  return (
    <>
      <a
        href="https://github.com/mostafa-elsayd-githup"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-(--bg-section) rounded-full p-2 cursor-pointer inline-flex items-center justify-center"
      >
        <FaGithub className="text-2xl text-(--color-muted) hover:text-(--color-accent) transition-colors" />
      </a>

      <a
        href="https://www.linkedin.com/in/mostafa-elsayd-a4b793430"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-(--bg-section) rounded-full p-2 cursor-pointer inline-flex items-center justify-center"
      >
        <FaLinkedinIn className="text-2xl text-(--color-muted) hover:text-(--color-accent) transition-colors" />
      </a>

      <a
        href="https://wa.me/201101260255"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-(--bg-section) rounded-full p-2 cursor-pointer inline-flex items-center justify-center"
      >
        <FaWhatsapp className="text-2xl text-(--color-muted) hover:text-(--color-accent) transition-colors" />
      </a>
    </>
  );
}
