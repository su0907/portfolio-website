import React from "react";

export const PersonalStatement = ({ isDarkMode, themeColors }) => {
  return (
    <div className="space-y-8">
      {/* About Me */}
      <section>
        <h2
          className={`text-3xl font-bold mb-6 ${themeColors.text} flex items-center gap-3`}
        >
          About Me
          <span className="text-lg font-normal text-gray-500">- 자기소개</span>
        </h2>
        <div
          className={`${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded-lg shadow-lg p-6`}
        >
          <div className={`${themeColors.secondary} leading-relaxed space-y-3`}>
            <p>
              안녕하세요, 풀스택 개발자를 목표로 성장하고 있는 김민수입니다.
            </p>
            <p>
              사용자 중심의 서비스를 만들고, 기술적 문제를 해결하는 것에 큰
              흥미를 느낍니다. 단순히 코드를 작성하는 것을 넘어, 사용자의
              불편함을 해소하고 더 나은 경험을 제공하는 서비스를 개발하고자
              합니다.
            </p>
            <p>
              새로운 기술을 배우는 것을 즐기며, 팀과의 협업을 통해 더 나은
              결과물을 만들어내는 것을 중요하게 생각합니다. 특히 프로젝트 경험을
              통해 Flutter, Spring Boot, React 등 다양한 기술 스택을 활용한
              풀스택 개발 역량을 키워왔습니다.
            </p>
            <p>
              앞으로도 끊임없이 배우고 성장하며, 기술로 사회에 가치를 더하는
              개발자가 되겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 성장 과정 */}
      <section>
        <h2
          className={`text-3xl font-bold mb-6 ${themeColors.text} flex items-center gap-3`}
        >
          Growth Story
          <span className="text-lg font-normal text-gray-500">- 성장 과정</span>
        </h2>
        <div
          className={`${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded-lg shadow-lg p-6`}
        >
          <div className={`${themeColors.secondary} leading-relaxed space-y-4`}>
            <div>
              <h3 className={`font-bold text-lg mb-2 ${themeColors.text}`}>
                개발에 대한 관심의 시작
              </h3>
              <p>
                고등학교 시절, 처음 접한 프로그래밍 수업에서 코드 한 줄로
                컴퓨터가 작동하는 모습에 매료되었습니다. 단순히 프로그램을
                사용하는 것을 넘어, 직접 만들어내는 과정에서 큰 성취감을 느꼈고,
                이것이 개발자의 길로 나아가게 된 계기가 되었습니다.
              </p>
            </div>

            <div>
              <h3 className={`font-bold text-lg mb-2 ${themeColors.text}`}>
                대학 생활과 프로젝트 경험
              </h3>
              <p>
                인하공전에 입학하여 본격적으로 컴퓨터 공학을 공부하면서,
                이론뿐만 아니라 실제 서비스 개발 경험의 중요성을 깨달았습니다.
                TalkDok 프로젝트에서는 팀원들과의 협업을 통해 실시간 데이터
                처리의 어려움을 극복했고, B+코치 프로젝트에서는 AI 기술을 접목한
                혁신적인 서비스를 구현하며 기술적 역량을 크게 성장시켰습니다.
              </p>
            </div>

            <div>
              <h3 className={`font-bold text-lg mb-2 ${themeColors.text}`}>
                문제 해결 과정에서의 성장
              </h3>
              <p>
                프로젝트를 진행하며 수많은 에러와 마주쳤지만, 이를 해결하는
                과정에서 진정한 성장을 경험했습니다. Firebase 최적화 문제, AI
                응답 속도 개선, RESTful API 설계 등 다양한 기술적 도전을 통해
                단순히 코드를 작성하는 것이 아닌, 효율적이고 확장 가능한
                시스템을 설계하는 능력을 키웠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 성격의 장단점 */}
      <section>
        <h2
          className={`text-3xl font-bold mb-6 ${themeColors.text} flex items-center gap-3`}
        >
          Personality
          <span className="text-lg font-normal text-gray-500">
            - 성격의 장단점
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 장점 */}
          <div
            className={`${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } rounded-lg shadow-lg p-6`}
          >
            <h3
              className={`font-bold text-xl mb-4 ${themeColors.text} flex items-center gap-2`}
            >
              장점
            </h3>
            <div className={`${themeColors.secondary} space-y-3`}>
              <div>
                <p className="font-semibold mb-1">끈기와 책임감</p>
                <p className="text-sm">
                  한 번 시작한 일은 반드시 완성하려는 성격으로, 프로젝트 진행 중
                  어려움이 있어도 포기하지 않고 끝까지 해결 방법을 찾습니다.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">빠른 학습 능력</p>
                <p className="text-sm">
                  새로운 기술이나 프레임워크를 빠르게 습득하며, 프로젝트마다
                  다른 기술 스택(Flutter, Spring Boot, React)을 성공적으로
                  적용했습니다.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">협업과 소통</p>
                <p className="text-sm">
                  팀 프로젝트에서 적극적으로 의견을 나누며, 팀원들의 의견을
                  존중하고 함께 최선의 해결책을 찾아가는 것을 중요하게
                  생각합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 단점 및 개선 노력 */}
          <div
            className={`${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } rounded-lg shadow-lg p-6`}
          >
            <h3
              className={`font-bold text-xl mb-4 ${themeColors.text} flex items-center gap-2`}
            >
              단점 및 개선 노력
            </h3>
            <div className={`${themeColors.secondary} space-y-3`}>
              <div>
                <p className="font-semibold mb-1">완벽주의 성향</p>
                <p className="text-sm">
                  때때로 코드를 완벽하게 작성하려다 시간을 너무 많이 소비하는
                  경향이 있습니다. 이를 개선하기 위해 우선순위를 정하고,
                  MVP(Minimum Viable Product) 개념을 적용하여 효율적으로
                  개발하는 방법을 배워가고 있습니다.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">낯가림</p>
                <p className="text-sm">
                  처음 만나는 사람들과는 다소 낯을 가리는 편이지만, 팀
                  프로젝트를 통해 먼저 다가가고 소통하는 연습을 하며 점차
                  극복해가고 있습니다.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">지속적인 개선</p>
                <p className="text-sm">
                  매 프로젝트 후 회고를 통해 부족한 점을 파악하고, 다음
                  프로젝트에서는 개선된 모습을 보이기 위해 노력하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 지원 동기 및 포부 */}
      <section>
        <h2
          className={`text-3xl font-bold mb-6 ${themeColors.text} flex items-center gap-3`}
        >
          Motivation & Vision
          <span className="text-lg font-normal text-gray-500">
            - 지원 동기 및 포부
          </span>
        </h2>
        <div
          className={`${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded-lg shadow-lg p-6`}
        >
          <div className={`${themeColors.secondary} leading-relaxed space-y-4`}>
            <div>
              <h3 className={`font-bold text-lg mb-2 ${themeColors.text}`}>
                지원 동기
              </h3>
              <p>
                현대 사회에서 소프트웨어는 단순한 도구를 넘어 생활의 필수 요소가
                되었습니다. 저는 제가 개발한 서비스가 누군가의 일상을 더
                편리하게 만들고, 새로운 가치를 창출하는 모습을 보고 싶습니다.
                TalkDok 프로젝트를 통해 독서 습관 형성에 도움을 주고, B+코치를
                통해 학습 효율을 높이는 경험을 하며, 기술이 사람들의 삶에
                실질적인 도움을 줄 수 있다는 확신을 갖게 되었습니다.
              </p>
              <p className="mt-3">
                귀사는 혁신적인 기술로 사용자 경험을 개선하고, 사회에 긍정적인
                영향을 미치는 서비스를 개발하는 기업으로 알고 있습니다. 저의
                기술력과 열정을 바탕으로 귀사의 성장에 기여하고, 동시에 저 또한
                성장할 수 있는 기회를 얻고자 지원하게 되었습니다.
              </p>
            </div>

            <div>
              <h3 className={`font-bold text-lg mb-2 ${themeColors.text}`}>
                향후 포부
              </h3>
              <p>
                입사 후 먼저 팀에 빠르게 적응하며, 기존 프로젝트의 코드베이스와
                개발 프로세스를 익히는 데 집중하겠습니다. 동시에 제가 경험한
                Flutter, Spring Boot, React 기술을 활용하여 팀에 실질적으로
                기여할 수 있는 개발자가 되고자 합니다.
              </p>
              <p className="mt-3">
                단기적으로는 주니어 개발자로서 맡은 업무를 완벽하게 수행하며
                신뢰를 쌓고, 중장기적으로는 프로젝트 전체를 설계하고 이끌어갈 수
                있는 시니어 개발자로 성장하고 싶습니다. 또한 기술 블로그 운영과
                오픈소스 기여를 통해 개발 커뮤니티에도 기여하는 개발자가
                되겠습니다.
              </p>
              <p className="mt-3">
                궁극적으로는 사용자에게 진정한 가치를 제공하는 서비스를 만들고,
                기술로 더 나은 세상을 만드는 데 기여하는 개발자로 성장하고
                싶습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
