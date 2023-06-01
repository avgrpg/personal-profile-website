import { useEffect, useState } from "react";

const useThemeSwitcher = () : [string, (mode: "light" | "dark") => void] => {
  const useDarkQuery = "(prefers-color-scheme: dark)";

  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia(useDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPref) {
        let check: "light" | "dark" = userPref === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        // If user local storage has no value
        let check: "light" | "dark" = mediaQuery.matches ? "dark" : "light";
        setMode(check);
      }
    };

    handleChange()

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if(mode === "dark"){
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
        window.localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
    }


  },[mode])

  return [mode, setMode];
};

export default useThemeSwitcher;
