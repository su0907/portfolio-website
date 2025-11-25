import React from "react";

export const ProjectCards = ({ isDarkMode, themeColors, onProjectSelect }) => {
  const projects = [
    {
      id: "talkdok",
      icon: "📚",
      title: "TalkDok",
      subtitle: "독서 챌린지 앱",
      description: "Flutter + Firebase 기반 독서 관리 플랫폼",
    },
    {
      id: "bcoach",
      icon: "🤖",
      title: "B+코치",
      subtitle: "AI 문제풀이 앱",
      description: "Spring Boot + Swift 기반 AI 학습 플랫폼",
    },
    {
      id: "shop",
      icon: "🛒",
      title: "쇼핑몰",
      subtitle: "전자상거래 웹사이트",
      description: "React + Node.js 기반 풀스택 프로젝트",
    },
  ];

  return (
    <section>
      <h2
        className={`text-3xl font-bold mb-6 ${themeColors.text} flex items-center gap-3`}
      >
        Projects
        <span className="text-lg font-normal text-gray-500">- 프로젝트</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => onProjectSelect(project.id)}
            className={`${
              isDarkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-50"
            } rounded-lg shadow-lg p-6 text-left transition-all transform hover:scale-105 cursor-pointer`}
          >
            <div className="text-4xl mb-3">{project.icon}</div>
            <h3 className={`text-xl font-bold mb-2 ${themeColors.text}`}>
              {project.title}
            </h3>
            <p className={`text-sm ${themeColors.accent} mb-3`}>
              {project.subtitle}
            </p>
            <p className={`text-sm ${themeColors.secondary} mb-4`}>
              {project.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-blue-500">
              <span>자세히 보기</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};
