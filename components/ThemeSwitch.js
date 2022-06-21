import { useState } from "react";

export default function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(false);
  console.log("dark mode themeSwitch", darkMode);

  const text = darkMode ? "Light Mode" : "Dark Mode";
  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>{text}</button>
      <style jsx>
        {`
          button {
            background: none;
            border: none;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
