import { createContext, useContext, useRef } from "react";


const NavigationContext = createContext(null);

export function NavigationProvider({ children }) {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const navBarHeight = "10vh";

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
        portfolioRef,
        experienceRef,
        contactRef,
        scrollToSection,
        navBarHeight,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}