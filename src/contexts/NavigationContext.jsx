import { createContext, useContext, useRef } from "react";

const NavigationContext = createContext(null);

export function NavigationProvider({ children }) {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <NavigationContext.Provider
      value={{
        homeRef,
        aboutRef,
        projectsRef,
        experienceRef,
        contactRef,
        scrollToSection,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}