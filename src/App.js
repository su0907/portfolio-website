import React, { useState, useEffect } from "react";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { PdfDownloadButton } from "./components/PdfDownloadButton";
import { ResumePage } from "./components/ResumePage";
import { getThemeColors } from "./utils/theme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeColors = getThemeColors(isDarkMode);

  // 다크모드 변경 시 body 클래스 추가/제거
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-slate-50"}`}
    >
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
      <PdfDownloadButton isDarkMode={isDarkMode} />

      <ResumePage isDarkMode={isDarkMode} themeColors={themeColors} />
    </div>
  );
}

export default App;
