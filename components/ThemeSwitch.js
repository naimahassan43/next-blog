import { useState } from "react";
import DarkTheme from "./DarkTheme";

function loadDarkMode() {
  const value = localStorage.getItem("darkMode");
  return value === null ? false : JSON.parse(value);
}

export default function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };
  console.log("dark mode themeSwitch", darkMode);

  const text = darkMode ? "Light Mode" : "Dark Mode";
  return (
    <>
      <button onClick={handleClick}>{text}</button>
      <style jsx>
        {`
          button {
            background: none;
            border: none;
            color: inherit;
            cursor: pointer;
          }
        `}
      </style>
      {darkMode && <DarkTheme />}
    </>
  );
}
