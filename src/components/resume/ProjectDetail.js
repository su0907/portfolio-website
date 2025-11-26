import React, { useEffect } from "react";
import { projectData } from "../../data/projectData";
import { AladinDetail } from "../AladinDetail";

export const ProjectDetail = ({
  projectId,
  isDarkMode,
  themeColors,
  onBack,
}) => {
  const project = projectData[projectId];

  // 컴포넌트가 마운트될 때 맨 위로 스크롤
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!project) return null;

  // 알라딘 프로젝트는 특별한 레이아웃 사용
  if (projectId === "aladin") {
    return (
      <AladinDetail
        isDarkMode={isDarkMode}
        themeColors={themeColors}
        onBack={onBack}
      />
    );
  }

  // 기존 프로젝트 레이아웃 (TalkDok, B+코치)
  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      } py-16 px-8`}
    >
      <div className="max-w-5xl mx-auto">
        {/* 뒤로가기 버튼 */}
        <button
          onClick={onBack}
          className={`mb-8 flex items-center gap-2 px-4 py-2 rounded-lg ${
            isDarkMode
              ? "bg-gray-800 hover:bg-gray-700"
              : "bg-white hover:bg-gray-50"
          } ${themeColors.text} transition-colors shadow-lg`}
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          돌아가기
        </button>

        {/* 프로젝트 헤더 */}
        <div
          className={`${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded-lg shadow-xl p-8 mb-8`}
        >
          <h1 className={`text-4xl font-bold mb-3 ${themeColors.text}`}>
            {project.title}
          </h1>
          <div className={`flex gap-4 text-sm ${themeColors.secondary} mb-4`}>
            <span>📅 {project.period}</span>
            <span>👥 {project.type}</span>
            <span>💻 {project.tech}</span>
          </div>
          <p className={`text-lg ${themeColors.secondary}`}>
            {project.description}
          </p>
        </div>

        {/* 기술 스택 */}
        <div
          className={`${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded-lg shadow-xl p-8 mb-8`}
        >
          <h2 className={`text-2xl font-bold mb-4 ${themeColors.text}`}>
            기술 스택
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {project.techStack.map((tech, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg text-center ${
                  isDarkMode ? "bg-gray-700" : "bg-blue-50"
                } ${themeColors.text} text-sm font-medium`}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* 담당 역할 */}
        <div
          className={`${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded-lg shadow-xl p-8 mb-8`}
        >
          <h2 className={`text-2xl font-bold mb-4 ${themeColors.text}`}>
            담당 역할
          </h2>
          <ul className={`space-y-2 ${themeColors.secondary}`}>
            {project.role.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 주요 기능 */}
        <div
          className={`${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded-lg shadow-xl p-8 mb-8`}
        >
          <h2 className={`text-2xl font-bold mb-4 ${themeColors.text}`}>
            주요 기능
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-50"
                } ${themeColors.secondary}`}
              >
                <div className="flex items-start gap-2">
                  <span className="text-xl">✓</span>
                  <span>{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 프로젝트 성과 */}
        <div
          className={`${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded-lg shadow-xl p-8`}
        >
          <h2 className={`text-2xl font-bold mb-4 ${themeColors.text}`}>
            프로젝트 성과
          </h2>
          <ul className={`space-y-3 ${themeColors.secondary}`}>
            {project.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-green-500 mt-1 text-xl">●</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
