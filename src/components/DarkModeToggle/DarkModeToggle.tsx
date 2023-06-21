import { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, node } = useContext(ThemeContext);

  return (
    <div
      className="toggleContainer w-12 h-6 border-solid border-[1.5px] border-primary flex justify-between rounded-3xl items-center p-1 relative cursor-pointer select-none"
      onClick={() => toggle()}
    >
      <div className="iconToggle text-[12px]">🌙</div>
      <div className="iconToggle text-[12px]">☀️</div>
      <div
        className={`ball w-4 h-4 bg-primary rounded-[50%] absolute ${
          node === "dark" ? "right-1" : ""
        }`}
      />
    </div>
  );
};

export default DarkModeToggle;
