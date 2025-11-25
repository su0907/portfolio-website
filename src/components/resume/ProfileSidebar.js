import React from "react";

export const ProfileSidebar = ({ isDarkMode, themeColors }) => {
  return (
    <div className="space-y-6">
      {/* 프로필 & 연락처 */}
      <div
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } p-6 rounded-lg shadow-lg`}
      >
        <h3
          className={`text-sm font-bold mb-4 px-3 py-1 ${
            isDarkMode ? "bg-gray-700" : "bg-gray-900"
          } text-white uppercase tracking-wider`}
        >
          Profile / Contact
        </h3>
        <div className={`space-y-2 text-sm ${themeColors.secondary}`}>
          <p>📅 2002.09.07</p>
          <a
            href="mailto:raanggo@naver.com"
            className="block hover:text-blue-500 transition-colors"
          >
            📧 raanggo@naver.com
          </a>
          <p>📱 010-2925-7292</p>
          <p>🎓 인하공업전문대학</p>
          <p className="pl-4">컴퓨터정보공학과</p>
          <p className="pl-4">3학년 재학</p>
          <a
            href="https://github.com/su0907"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-blue-500 transition-colors"
          >
            🔗 github.com/su0907
          </a>
        </div>
      </div>

      {/* Languages */}
      <div
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } p-6 rounded-lg shadow-lg`}
      >
        <h3
          className={`text-sm font-bold mb-4 px-3 py-1 ${
            isDarkMode ? "bg-gray-700" : "bg-gray-900"
          } text-white uppercase tracking-wider`}
        >
          Languages
        </h3>
        <div className={`${themeColors.secondary} text-sm space-y-3`}>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span>한국어</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span>English</span>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
                {[...Array(2)].map((_, i) => (
                  <span key={i} className="text-gray-400">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } p-6 rounded-lg shadow-lg`}
      >
        <h3
          className={`text-sm font-bold mb-4 px-3 py-1 ${
            isDarkMode ? "bg-gray-700" : "bg-gray-900"
          } text-white uppercase tracking-wider`}
        >
          Skills
        </h3>

        <div className="space-y-4">
          {/* Frontend */}
          <div>
            <p className={`text-xs font-semibold mb-2 ${themeColors.text}`}>
              Frontend
            </p>
            <div className={`text-sm ${themeColors.secondary} space-y-1`}>
              <div className="flex justify-between">
                <span>React</span>
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                  <span className="text-gray-400">★</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span>JavaScript</span>
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                  <span className="text-gray-400">★</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span>HTML/CSS</span>
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                  <span className="text-gray-400">★</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span>Flutter</span>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                  {[...Array(2)].map((_, i) => (
                    <span key={i} className="text-gray-400">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div>
            <p className={`text-xs font-semibold mb-2 ${themeColors.text}`}>
              Backend
            </p>
            <div className={`text-sm ${themeColors.secondary} space-y-1`}>
              <div className="flex justify-between">
                <span>Java</span>
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                  <span className="text-gray-400">★</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span>Spring Boot</span>
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                  <span className="text-gray-400">★</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span>MySQL</span>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                  {[...Array(2)].map((_, i) => (
                    <span key={i} className="text-gray-400">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between">
                <span>Firebase</span>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                  {[...Array(2)].map((_, i) => (
                    <span key={i} className="text-gray-400">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div>
            <p className={`text-xs font-semibold mb-2 ${themeColors.text}`}>
              Tools
            </p>
            <div className={`text-sm ${themeColors.secondary} space-y-1`}>
              <div className="flex justify-between">
                <span>Git</span>
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                  <span className="text-gray-400">★</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span>VS Code</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
