import { create } from "zustand";
interface ScrollState {
  activeSection: string;
  setActiveSection: (sectionId: string) => void;
  scrollToSection: (sectionId: string) => void;
}
export const useScrollStore = create<ScrollState>((set) => ({
  activeSection: "home",
  setActiveSection: (sectionId) => set({ activeSection: sectionId }),
  scrollToSection: (sectionId) => {
    set({ activeSection: sectionId });
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  },
}));
