import React from "react";

export const PdfDownloadButton = ({ isDarkMode }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className={`fixed top-6 right-32 z-50 flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
        isDarkMode
          ? "bg-gray-800 text-white hover:bg-gray-700"
          : "bg-white text-gray-700 hover:bg-gray-50 shadow-lg"
      } backdrop-blur-sm border ${
        isDarkMode ? "border-gray-600" : "border-gray-200"
      }`}
      title="페이지 인쇄 / PDF 저장"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
        />
      </svg>
      <span className="text-sm font-medium">인쇄</span>
    </button>
  );
};
