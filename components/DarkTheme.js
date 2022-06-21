import React from "react";

function DarkTheme() {
  return (
    <style jsx global>
      {`
        /* Dark theme */
        :root {
          --background-color: rgb(32, 31, 31);
          --text-color: #fff;
          --link-color: rgba(202, 156, 6, 0.848);
        }
      `}
    </style>
  );
}

export default DarkTheme;
