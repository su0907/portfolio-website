import React, { useState, useEffect } from "react";
import { ProfileSidebar } from "./resume/ProfileSidebar";
import { PersonalStatement } from "./resume/PersonalStatement";
import { ProjectCards } from "./resume/ProjectCards";
import { ProjectDetail } from "./resume/ProjectDetail";

export const ResumePage = ({ isDarkMode, themeColors }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  // URL에서 프로젝트 정보 읽기
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get("project");
    if (projectId) {
      setSelectedProject(projectId);
    }
  }, []);

  // 프로젝트 선택 시 URL 업데이트
  const handleProjectSelect = (projectId) => {
    setSelectedProject(projectId);
    window.history.pushState({}, "", `?project=${projectId}`);
  };

  // 뒤로가기 버튼 클릭 시
  const handleBack = () => {
    setSelectedProject(null);
    window.history.pushState({}, "", window.location.pathname);
  };

  // 브라우저 뒤로가기/앞으로가기 버튼 처리
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const projectId = params.get("project");
      setSelectedProject(projectId);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // 프로젝트 상세 페이지 표시
  if (selectedProject) {
    return (
      <ProjectDetail
        projectId={selectedProject}
        isDarkMode={isDarkMode}
        themeColors={themeColors}
        onBack={handleBack}
      />
    );
  }

  // 메인 이력서 페이지
  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      } print:bg-white`}
    >
      <div className="max-w-6xl mx-auto px-8 py-16 print:py-8">
        {/* 헤더 섹션 */}
        <header
          className={`mb-16 pb-8 border-b-4 ${
            isDarkMode ? "border-blue-500" : "border-blue-600"
          }`}
        >
          <div className="flex items-start justify-between gap-8">
            {/* 프로필 사진 */}
            <div className="flex-shrink-0">
              <div
                className={`w-32 h-32 rounded-full overflow-hidden border-4 ${
                  isDarkMode ? "border-gray-600" : "border-gray-300"
                }`}
              >
                <img
                  src="/images/profile.jpeg"
                  alt="김민수 프로필"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 이름 및 직무 */}
            <div className="flex-1">
              <h1 className={`text-6xl font-bold mb-2 ${themeColors.text}`}>
                김민수
              </h1>
              <div
                className={`inline-block px-4 py-1 mt-2 ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-800"
                } text-white text-sm uppercase tracking-wider`}
              >
                Full-Stack Developer
              </div>

              {/* 한 줄 소개 */}
              <p
                className={`mt-6 text-lg leading-relaxed ${themeColors.secondary}`}
              >
                끊임없이 배우고 성장하며, 사용자 중심의 가치 있는 서비스를
                개발하는 풀스택 개발자입니다.
              </p>
            </div>
          </div>
        </header>

        {/* 메인 컨텐츠 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 좌측 사이드바 */}
          <div className="md:col-span-1">
            <ProfileSidebar isDarkMode={isDarkMode} themeColors={themeColors} />
          </div>

          {/* 우측 메인 컨텐츠 */}
          <div className="md:col-span-3 space-y-12">
            {/* 자기소개, 성장과정, 성격, 지원동기 */}
            <PersonalStatement
              isDarkMode={isDarkMode}
              themeColors={themeColors}
            />

            {/* Achievements & Certifications */}
            <section>
              <h2
                className={`text-3xl font-bold mb-6 ${themeColors.text} flex items-center gap-3`}
              >
                Achievements & Certifications
                <span className="text-lg font-normal text-gray-500">
                  - 수상 및 자격증
                </span>
              </h2>
              <div
                className={`${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } rounded-lg shadow-lg p-6`}
              >
                <div
                  className={`border-l-4 ${
                    isDarkMode ? "border-blue-500" : "border-blue-600"
                  } pl-6 space-y-4`}
                >
                  <div>
                    <p className={`font-bold text-lg ${themeColors.text}`}>
                      2025.06
                    </p>
                    <p className={`${themeColors.secondary} font-semibold`}>
                      정보처리산업기사 취득
                    </p>
                    <p
                      className={`text-sm mt-1 ${themeColors.secondary} opacity-75`}
                    >
                      한국산업인력공단 주관 국가기술자격
                    </p>
                  </div>
                  <div>
                    <p className={`font-bold text-lg ${themeColors.text}`}>
                      2025.09
                    </p>
                    <p className={`${themeColors.secondary} font-semibold`}>
                      2025 컴퓨터정보공학과 해커톤 대회 우수상
                    </p>
                    <p
                      className={`text-sm mt-1 ${themeColors.secondary} opacity-75`}
                    >
                      AI 기반 학습 플랫폼 'B+코치' 개발로 우수상 수상
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects */}
            <ProjectCards
              isDarkMode={isDarkMode}
              themeColors={themeColors}
              onProjectSelect={handleProjectSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
