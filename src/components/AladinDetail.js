import React, { useEffect } from "react";

export const AladinDetail = ({ isDarkMode, themeColors, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      } py-16 px-8`}
    >
      <div className="max-w-6xl mx-auto">
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

        {/* 프로젝트 타이틀 */}
        <div
          className={`${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded-lg shadow-xl p-8 mb-8`}
        >
          <h1 className={`text-5xl font-bold mb-4 ${themeColors.text}`}>
            알라딘 월간 베스트셀러 데이터 분석 프로젝트
          </h1>
          <div
            className={`flex flex-wrap gap-4 text-lg ${themeColors.secondary} mb-4`}
          >
            <span>📅 2020년 1월 ~ 2025년 11월 (71개월)</span>
            <span>📊 알라딘 월간 베스트셀러 TOP 50</span>
          </div>
          <a
            href="https://github.com/su0907/aladin-reading-trend-project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub Repository
          </a>
        </div>

        {/* 1. 프로젝트 개요 */}
        <Section
          title="1. 프로젝트 개요"
          isDarkMode={isDarkMode}
          themeColors={themeColors}
        >
          <SubSection
            title="1.1 목적"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <p className={themeColors.secondary}>
              본 프로젝트는 2020~2025년 알라딘 월간 베스트셀러 데이터를 크롤링
              및 분석하여 독서 트렌드 변화를 파악하는 것을 목표로 합니다.
            </p>
          </SubSection>

          <SubSection
            title="1.2 기술 스택"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard isDarkMode={isDarkMode} themeColors={themeColors}>
                <strong>언어:</strong> Python 3.12
              </InfoCard>
              <InfoCard isDarkMode={isDarkMode} themeColors={themeColors}>
                <strong>크롤링:</strong> BeautifulSoup4, urllib
              </InfoCard>
              <InfoCard isDarkMode={isDarkMode} themeColors={themeColors}>
                <strong>데이터 처리:</strong> Pandas, NumPy
              </InfoCard>
              <InfoCard isDarkMode={isDarkMode} themeColors={themeColors}>
                <strong>시각화:</strong> Matplotlib, Seaborn, Plotly
              </InfoCard>
              <InfoCard isDarkMode={isDarkMode} themeColors={themeColors}>
                <strong>병렬 처리:</strong> ThreadPoolExecutor
              </InfoCard>
              <InfoCard isDarkMode={isDarkMode} themeColors={themeColors}>
                <strong>환경:</strong> Google Colab
              </InfoCard>
            </div>
          </SubSection>
        </Section>

        {/* 2. 데이터 수집 */}
        <Section
          title="2. 데이터 수집"
          isDarkMode={isDarkMode}
          themeColors={themeColors}
        >
          <SubSection
            title="2.1 크롤링 대상 및 기간"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <DataTable isDarkMode={isDarkMode} themeColors={themeColors}>
              <thead>
                <tr>
                  <th>항목</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>대상 사이트</td>
                  <td>알라딘 (www.aladin.co.kr)</td>
                </tr>
                <tr>
                  <td>수집 기간</td>
                  <td>2020년 1월 ~ 2025년 11월 (71개월)</td>
                </tr>
                <tr>
                  <td>수집 범위</td>
                  <td>월간 베스트셀러 TOP 50</td>
                </tr>
                <tr>
                  <td>이론적 수집량</td>
                  <td>71개월 × 50개 = 3,550개</td>
                </tr>
                <tr>
                  <td>실제 수집량</td>
                  <td>3,539개 (11개 누락)</td>
                </tr>
              </tbody>
            </DataTable>
          </SubSection>

          <SubSection
            title="2.2 1차 크롤링: 월간 베스트셀러 리스트"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <h4 className={`text-lg font-semibold mb-3 ${themeColors.text}`}>
              2.2.1 URL 구조 분석
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`https://www.aladin.co.kr/shop/common/wbest.aspx?BranchType=1&BestType=Month&Year={year}&Month={month}

파라미터:
- BranchType=1: 국내도서
- BestType=Month: 월간 베스트셀러
- Year={year}: 연도 (2020~2025)
- Month={month}: 월 (1~12)`}
            </CodeBlock>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              2.2.2 HTML 선택자 탐색
            </h4>
            <p className={`mb-3 ${themeColors.secondary}`}>
              웹 브라우저의 F12 개발자 도구를 사용하여 HTML 구조를 분석하고,
              다음과 같은 CSS Selector를 추출했습니다:
            </p>
            <SelectorTable isDarkMode={isDarkMode} themeColors={themeColors}>
              <thead>
                <tr>
                  <th className="w-1/3">데이터</th>
                  <th className="w-2/3">CSS Selector</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>도서 컨테이너</td>
                  <td>
                    <code>div.ss_book_box</code>
                  </td>
                </tr>
                <tr>
                  <td>제목</td>
                  <td>
                    <code>a.bo3</code>
                  </td>
                </tr>
                <tr>
                  <td>저자</td>
                  <td>
                    <code>li.ss_aut a</code>
                  </td>
                </tr>
                <tr>
                  <td>카테고리</td>
                  <td>
                    <code>span.tit_category</code>
                  </td>
                </tr>
                <tr>
                  <td>가격</td>
                  <td>
                    <code>span.ss_p2 b</code>
                  </td>
                </tr>
                <tr>
                  <td>평점</td>
                  <td>
                    <code>span.Ere_fs14.Ere_str</code>
                  </td>
                </tr>
              </tbody>
            </SelectorTable>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              2.2.3 크롤링 코드 (핵심 로직)
            </h4>
            <p className={`mb-3 ${themeColors.secondary}`}>
              도서 정보 추출 부분:
            </p>
            <CodeBlock isDarkMode={isDarkMode}>
              {`# 도서 정보 추출
items = soup.select("div.ss_book_box")
books = []

for rank, item in enumerate(items, 1):
    try:
        # 제목
        title_tag = item.select_one("a.bo3")
        title = title_tag.text.strip() if title_tag else "N/A"
        
        # 저자
        author_tag = item.select_one("li.ss_aut a")
        author = author_tag.text.strip() if author_tag else "N/A"
        
        # 카테고리
        category_tag = item.select_one("span.tit_category")
        category = category_tag.text.strip() if category_tag else "N/A"
        
        # 가격
        price_tag = item.select_one("span.ss_p2 b")
        price = int(price_tag.text.strip().replace(',', '')) if price_tag else 0
        
        books.append({
            'year': year, 'month': month, 'rank': rank,
            'title': title, 'author': author, 'category': category, 'price': price
        })
    except Exception as e:
        continue`}
            </CodeBlock>

            <p className={`mb-3 mt-6 ${themeColors.secondary}`}>
              전체 기간 크롤링 설정:
            </p>
            <CodeBlock isDarkMode={isDarkMode}>
              {`# 전체 기간 크롤링 실행 (2020년 1월 ~ 2025년 11월)
all_books = []
for year in range(2020, 2026):
    for month in range(1, 13):
        if year == 2025 and month > 11:  # 2025년 11월까지만
            break
        
        print(f"Crawling {year}-{month:02d}...")
        books = crawl_bestseller(year, month)
        all_books.extend(books)
        time.sleep(1)  # 서버 부하 방지`}
            </CodeBlock>

            <NoteBox isDarkMode={isDarkMode} themeColors={themeColors}>
              전체 코드는{" "}
              <a
                href="https://github.com/su0907/aladin-reading-trend-project/blob/main/notebooks/01_crawling.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub Repository
              </a>
              에서 확인 가능합니다.
            </NoteBox>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              2.2.4 수집 결과
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`총 수집: 3,539개 행
예상 수집: 3,550개 행
누락: 11개 (0.3%)

누락 상세:
- 2020년 4월: 1개 누락 (49개 수집)
- 2023년 2~11월: 각 1개씩 누락 (10개월, 각 49개 수집)`}
            </CodeBlock>
          </SubSection>

          <SubSection
            title="2.3 2차 크롤링: 도서 상세 정보"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <h4 className={`text-lg font-semibold mb-3 ${themeColors.text}`}>
              2.3.1 크롤링 목적
            </h4>
            <p className={`mb-3 ${themeColors.secondary}`}>
              1차 크롤링에서는 <strong>포괄적 카테고리</strong>(예:
              "국내도서")만 수집되었으므로, 도서 상세 페이지에서{" "}
              <strong>구체적 카테고리</strong>(예: "소설/시/희곡")와{" "}
              <strong>페이지 수</strong>를 추가로 수집합니다.
            </p>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              2.3.2 도서 상세 페이지 구조
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`URL: https://www.aladin.co.kr/shop/wproduct.aspx?ItemId={item_id}

추출 정보:
1. detail_category (상세 카테고리)
   - 선택자: ul#ulCategory li a
   - 예시: "국내도서 > 소설/시/희곡"
   
2. page_count (페이지 수)
   - 선택자: div.conts_info_list1 ul li
   - 예시: "368쪽"`}
            </CodeBlock>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              2.3.3 병렬 처리 구현
            </h4>
            <p className={`mb-3 ${themeColors.secondary}`}>
              고유 도서 1,958개의 상세 페이지를 효율적으로 크롤링하기 위해{" "}
              <strong>ThreadPoolExecutor</strong>를 사용한 병렬 처리를
              구현했습니다 (15개 스레드 동시 실행).
            </p>
            <CodeBlock isDarkMode={isDarkMode}>
              {`from concurrent.futures import ThreadPoolExecutor

def crawl_detail(item_id):
    # 상세 페이지 크롤링 로직
    url = f'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId={item_id}'
    # ... 크롤링 코드 ...
    return {'item_id': item_id, 'detail_category': category, 'page_count': pages}

# 병렬 처리 (15개 스레드)
with ThreadPoolExecutor(max_workers=15) as executor:
    results = list(executor.map(crawl_detail, unique_item_ids))`}
            </CodeBlock>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              2.3.4 수집 결과
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`고유 도서: 1,958개
수집 성공: 1,958개`}
            </CodeBlock>
          </SubSection>

          <SubSection
            title="2.4 크롤링 이슈 및 해결"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <IssueBox
              title="이슈 1: HTML 선택자 오타"
              isDarkMode={isDarkMode}
              themeColors={themeColors}
            >
              <p className={`mb-2 ${themeColors.secondary}`}>
                <strong>문제:</strong>
              </p>
              <ul className={`list-disc pl-6 mb-3 ${themeColors.secondary}`}>
                <li>
                  초기 코드에서 span.tit_catrgory로 오타 발생 ("category" 스펠링
                  오류)
                </li>
                <li>모든 도서의 category 값이 None으로 수집됨</li>
              </ul>
              <p className={`mb-2 ${themeColors.secondary}`}>
                <strong>해결:</strong>
              </p>
              <ul className={`list-disc pl-6 ${themeColors.secondary}`}>
                <li>span.tit_category로 수정</li>
                <li>카테고리 정보 정상 수집 확인</li>
              </ul>
            </IssueBox>

            <IssueBox
              title="이슈 2: 50위 도서 크롤링 실패"
              isDarkMode={isDarkMode}
              themeColors={themeColors}
            >
              <p className={`mb-2 ${themeColors.secondary}`}>
                <strong>문제:</strong>
              </p>
              <ul className={`list-disc pl-6 mb-3 ${themeColors.secondary}`}>
                <li>BeautifulSoup 파싱 결과 49개만 수집 (50개 예상)</li>
                <li>F12 개발자 도구로 확인 시 50위 도서가 페이지에 존재</li>
              </ul>
              <p className={`mb-2 ${themeColors.secondary}`}>
                <strong>최종 결론:</strong>
              </p>
              <ul className={`list-disc pl-6 ${themeColors.secondary}`}>
                <li>11개 데이터 누락 (전체의 0.3%)</li>
                <li>분석에 미치는 영향 미미</li>
              </ul>
            </IssueBox>

            <IssueBox
              title="이슈 3: 성인 도서 크롤링 제한"
              isDarkMode={isDarkMode}
              themeColors={themeColors}
            >
              <p className={`mb-2 ${themeColors.secondary}`}>
                <strong>문제:</strong>
              </p>
              <ul className={`list-disc pl-6 mb-3 ${themeColors.secondary}`}>
                <li>성인 인증이 필요한 도서는 상세 페이지 접근 불가</li>
                <li>detail_category = None, page_count = 0으로 수집됨</li>
              </ul>
              <p className={`mb-2 ${themeColors.secondary}`}>
                <strong>영향받은 데이터:</strong>
              </p>
              <CodeBlock isDarkMode={isDarkMode}>
                {`총 21개 고유 도서
베스트셀러 진입 횟수: 22회`}
              </CodeBlock>
              <p className={`mt-3 ${themeColors.secondary}`}>
                <strong>해결:</strong> 전처리 단계에서 제거
              </p>
            </IssueBox>
          </SubSection>

          <SubSection
            title="2.5 데이터 저장 구조"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <CodeBlock isDarkMode={isDarkMode}>
              {`data/
├── raw/
│   ├── aladin.csv              # 1차 크롤링 결과
│   │   ├── 행 수: 3,539개
│   │   └── 컬럼: year, month, rank, title, author, 
│   │            category, price, star_score, item_id
│   │
│   └── detail_mapping.csv      # 2차 크롤링 결과
│       ├── 행 수: 1,958개 (고유 도서)
│       └── 컬럼: item_id, detail_category, page_count
│
└── processed/
    └── aladin_final_cleaned.csv  # 최종 정제 데이터
        ├── 행 수: 3,517개
        └── 컬럼: year, month, rank, title, author,
                 category, price, star_score, item_id, page_count`}
            </CodeBlock>
          </SubSection>
        </Section>

        {/* 3. 데이터 전처리 */}
        <Section
          title="3. 데이터 전처리 및 변환"
          isDarkMode={isDarkMode}
          themeColors={themeColors}
        >
          <SubSection
            title="3.1 데이터 병합"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <h4 className={`text-lg font-semibold mb-3 ${themeColors.text}`}>
              3.1.1 병합 전 데이터 상태
            </h4>

            <p className={`font-semibold mb-2 ${themeColors.text}`}>
              aladin.csv (1차 크롤링):
            </p>
            <CodeBlock isDarkMode={isDarkMode}>
              {`총 행 수: 3,539개
고유 도서: 1,958개
결측치: 없음

특징:
- 같은 도서가 여러 달 베스트셀러에 진입한 경우 여러 행으로 기록
- category: "국내도서" 등 포괄적 카테고리
- page_count: 모두 0 (정보 없음)`}
            </CodeBlock>

            <p className={`font-semibold mb-2 mt-4 ${themeColors.text}`}>
              detail_mapping.csv (2차 크롤링):
            </p>
            <CodeBlock isDarkMode={isDarkMode}>
              {`총 행 수: 1,958개 (고유 도서)
결측치:
- detail_category: 21개 (1.1%)
- page_count: 0개 (모두 값 존재, 단 21개가 0)

특징:
- item_id 기준 1:1 매칭
- detail_category: "소설/시/희곡" 등 구체적 카테고리
- page_count = 0이면서 detail_category = NaN인 경우 = 성인 도서`}
            </CodeBlock>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              3.1.2 병합 과정
            </h4>
            <HighlightBox isDarkMode={isDarkMode} themeColors={themeColors}>
              <p className={`font-semibold mb-2 ${themeColors.text}`}>
                병합 방식:
              </p>
              <ul className={`list-disc pl-6 ${themeColors.secondary}`}>
                <li>LEFT JOIN (item_id 기준)</li>
                <li>1차 크롤링 데이터에 2차 크롤링 데이터 병합</li>
                <li>결과: 3,539개 행</li>
              </ul>
              <p className={`font-semibold mt-3 mb-2 ${themeColors.text}`}>
                병합 후 결측치:
              </p>
              <p className={themeColors.secondary}>
                detail_category: 22개 (0.6%) ← 21개 고유 도서가 22회 진입
              </p>
            </HighlightBox>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              병합 코드 (핵심)
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`# 파일 로드
df_aladin = pd.read_csv('data/raw/aladin.csv', dtype={'item_id': str})
df_detail = pd.read_csv('data/raw/detail_mapping.csv', dtype={'item_id': str})

# LEFT JOIN
df_merged = pd.merge(
    df_aladin,
    df_detail.drop_duplicates(subset=['item_id']),
    on='item_id',
    how='left'
)

print(f"병합 후: {len(df_merged):,}개 행")`}
            </CodeBlock>
          </SubSection>

          <SubSection
            title="3.2 카테고리 정제"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <h4 className={`text-lg font-semibold mb-3 ${themeColors.text}`}>
              3.2.1 카테고리 업데이트
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`카테고리 업데이트 성공: 3,517개 (99.4%)
카테고리 업데이트 실패: 22개 (0.6%)

업데이트 실패 사유: 성인 도서 (detail_category = NaN)`}
            </CodeBlock>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              카테고리 업데이트 코드
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`# detail_category가 있으면 category 덮어쓰기
has_new_category = df_merged['detail_category'].notnull()
df_merged.loc[has_new_category, 'category'] = \\
    df_merged.loc[has_new_category, 'detail_category']

print(f"업데이트 성공: {has_new_category.sum()}개")
print(f"업데이트 실패: {(~has_new_category).sum()}개")`}
            </CodeBlock>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              3.2.2 Before / After 비교
            </h4>
            <DataTable isDarkMode={isDarkMode} themeColors={themeColors}>
              <thead>
                <tr>
                  <th>item_id</th>
                  <th>category (Before)</th>
                  <th>detail_category</th>
                  <th>category (After)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123456</td>
                  <td>국내도서</td>
                  <td>소설/시/희곡</td>
                  <td>소설/시/희곡</td>
                </tr>
                <tr>
                  <td>234567</td>
                  <td>국내도서</td>
                  <td>인문학</td>
                  <td>인문학</td>
                </tr>
                <tr>
                  <td>345678</td>
                  <td>국내도서</td>
                  <td>NaN</td>
                  <td>국내도서 (→ 제거)</td>
                </tr>
              </tbody>
            </DataTable>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              3.2.3 최종 카테고리 분포
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`소설/시/희곡     742개
만화           453개
인문학         335개
경제경영       314개
어린이         289개
자기계발       244개
에세이         189개
외국어         172개
역사           148개
과학           127개`}
            </CodeBlock>
          </SubSection>

          <SubSection
            title="3.3 결측치 처리"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <h4 className={`text-lg font-semibold mb-3 ${themeColors.text}`}>
              3.3.1 제거 대상 분석
            </h4>
            <p className={`mb-3 ${themeColors.secondary}`}>
              성인 도서는{" "}
              <strong>page_count = 0 AND detail_category = NaN</strong> 조건으로
              식별합니다.
            </p>
            <CodeBlock isDarkMode={isDarkMode}>
              {`제거 대상:
- 행 수: 22회 (베스트셀러 진입 기준)
- 고유 도서: 21개
- 이유: 성인 도서 (상세 페이지 접근 불가)

도서별 진입 횟수:
- 21개 고유 도서가 총 22회 베스트셀러에 진입
- 이 중 1개 도서가 2번 진입`}
            </CodeBlock>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              결측치 제거 코드
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`# 성인 도서 식별: page_count=0 AND detail_category=NaN
condition_remove = (df_merged['page_count'] == 0) & \\
                   (df_merged['detail_category'].isnull())

# 제거
df_cleaned = df_merged[~condition_remove].copy()

print(f"제거: {condition_remove.sum()}개")
print(f"최종: {len(df_cleaned)}개")`}
            </CodeBlock>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              3.3.2 데이터 정제
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`최종 데이터:
- 병합 후: 3,539개 행
- 제거: 22개 행
- 최종: 3,517개 행`}
            </CodeBlock>
          </SubSection>

          <SubSection
            title="3.4 최종 데이터 구조"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <h4 className={`text-lg font-semibold mb-3 ${themeColors.text}`}>
              3.4.1 컬럼 정보
            </h4>
            <DataTable isDarkMode={isDarkMode} themeColors={themeColors}>
              <thead>
                <tr>
                  <th>컬럼명</th>
                  <th>데이터 타입</th>
                  <th>설명</th>
                  <th>결측치</th>
                  <th>예시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>year</td>
                  <td>int64</td>
                  <td>연도</td>
                  <td>0</td>
                  <td>2024</td>
                </tr>
                <tr>
                  <td>month</td>
                  <td>int64</td>
                  <td>월</td>
                  <td>0</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>rank</td>
                  <td>int64</td>
                  <td>순위 (1~50)</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>title</td>
                  <td>object</td>
                  <td>도서명</td>
                  <td>0</td>
                  <td>소년이 온다</td>
                </tr>
                <tr>
                  <td>author</td>
                  <td>object</td>
                  <td>저자명</td>
                  <td>0</td>
                  <td>한강</td>
                </tr>
                <tr>
                  <td>category</td>
                  <td>object</td>
                  <td>카테고리 (22개)</td>
                  <td>0</td>
                  <td>소설/시/희곡</td>
                </tr>
                <tr>
                  <td>price</td>
                  <td>int64</td>
                  <td>가격 (원)</td>
                  <td>0</td>
                  <td>14,220</td>
                </tr>
                <tr>
                  <td>star_score</td>
                  <td>float64</td>
                  <td>평점 (0~10)</td>
                  <td>0</td>
                  <td>9.2</td>
                </tr>
                <tr>
                  <td>item_id</td>
                  <td>object</td>
                  <td>도서 고유 ID</td>
                  <td>0</td>
                  <td>8936433660</td>
                </tr>
                <tr>
                  <td>page_count</td>
                  <td>int64</td>
                  <td>페이지 수</td>
                  <td>0</td>
                  <td>216</td>
                </tr>
              </tbody>
            </DataTable>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              3.4.2 최종 통계
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`총 행 수: 3,517개
고유 도서: 1,937개
기간: 2020년 1월 ~ 2025년 11월
카테고리: 22개
평균 가격: 15,296원
평균 페이지: 334쪽
평균 평점: 9.05점`}
            </CodeBlock>

            <NoteBox isDarkMode={isDarkMode} themeColors={themeColors}>
              전체 전처리 코드는{" "}
              <a
                href="https://github.com/su0907/aladin-reading-trend-project/blob/main/notebooks/02_data_preprocessing.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub Repository
              </a>
              에서 확인 가능합니다.
            </NoteBox>
          </SubSection>
        </Section>

        {/* 4. 핵심 분석 결과 */}
        <Section
          title="4. 핵심 분석 결과"
          isDarkMode={isDarkMode}
          themeColors={themeColors}
        >
          {/* 시각화 1 */}
          <VisualizationSection
            title="4.1 연도별 평균 가격 추이"
            image="/images/01_yearly_price_trend.png"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <h4 className={`text-lg font-semibold mb-3 ${themeColors.text}`}>
              시각화 코드 (핵심)
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`# 연도별 평균 가격 계산
yearly_price = df.groupby('year')['price'].mean()

# 시각화
plt.figure(figsize=(14, 7))
plt.plot(yearly_price.index, yearly_price.values,
         marker='o', linewidth=2.5, markersize=10)

# 각 점에 값 표시
for x, y in zip(yearly_price.index, yearly_price.values):
    plt.text(x, y + 300, f'{y:,.0f}원', ha='center')

plt.xlabel('연도')
plt.ylabel('평균 가격 (원)')
plt.title('연도별 베스트셀러 평균 가격 추이')
plt.savefig('01_yearly_price_trend.png', dpi=300)`}
            </CodeBlock>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              분석 결과
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`2020년: 14,481원
2021년: 15,386원 (+6.2%)
2022년: 14,481원 (-5.9%) ← 급락
2023년: 15,340원 (+6.0%)
2024년: 16,010원 (+4.3%)
2025년: 16,158원 (+0.9%)`}
            </CodeBlock>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              참고: 2022년 전체 출판 시장 신간 평균 정가
            </h4>
            <p className={`mb-3 ${themeColors.secondary}`}>
              <strong>대한출판문화협회 통계:</strong>
            </p>
            <CodeBlock isDarkMode={isDarkMode}>
              {`2021년 발행 도서 평균 정가: 17,116원
2022년 발행 도서 평균 정가: 17,869원 (+4.4%)`}
            </CodeBlock>

            <HighlightBox isDarkMode={isDarkMode} themeColors={themeColors}>
              <p className={`font-semibold mb-2 ${themeColors.text}`}>
                베스트셀러 vs 전체 신간 시장 비교:
              </p>
              <ul className={`list-disc pl-6 ${themeColors.secondary}`}>
                <li>
                  <strong>베스트셀러 시장:</strong> 2021년 15,386원 → 2022년
                  14,481원 (-5.9%)
                </li>
                <li>
                  <strong>전체 신간 시장:</strong> 2021년 17,116원 → 2022년
                  17,869원 (+4.4%)
                </li>
              </ul>
              <p className={`mt-3 ${themeColors.secondary}`}>
                <strong>인사이트:</strong> 2022년 전체 출판 시장의 신간 평균
                정가는 상승한 반면, 베스트셀러 평균 가격은 하락했습니다. 이는
                베스트셀러 시장이 전체 출판 시장과 다른 독립적인 메커니즘으로
                작동하며, 특히 장르 구성 변화에 민감하게 반응함을 보여줍니다.
              </p>
            </HighlightBox>
          </VisualizationSection>

          {/* 시각화 2 */}
          <VisualizationSection
            title="4.2 연도별 평균 페이지 수 추이"
            image="/images/02_yearly_page_count.png"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <h4 className={`text-lg font-semibold mb-3 ${themeColors.text}`}>
              시각화 코드 (핵심)
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`# page_count > 0인 데이터만 필터링
df_with_pages = df[df['page_count'] > 0]

# 연도별 평균 페이지 수 계산
yearly_pages = df_with_pages.groupby('year')['page_count'].mean()

# 시각화
plt.figure(figsize=(14, 7))
plt.plot(yearly_pages.index, yearly_pages.values,
         marker='o', linewidth=2.5, markersize=10)
plt.xlabel('연도')
plt.ylabel('평균 페이지 수 (쪽)')
plt.title('연도별 베스트셀러 평균 페이지 수 변화')
plt.savefig('02_yearly_page_count.png', dpi=300)`}
            </CodeBlock>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              분석 결과
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`2020년: 325쪽
2021년: 365쪽 (+12.3%)
2022년: 314쪽 (-14.0%) ← 급락
2023년: 342쪽 (+8.9%)
2024년: 333쪽 (-2.6%)
2025년: 328쪽 (-1.5%)`}
            </CodeBlock>
          </VisualizationSection>

          {/* 시각화 3-5: 2022년 하락 원인 검증 */}
          <VisualizationSection
            title="4.3 2022년 하락 원인 검증 (1): 만화/어린이 비중 변화"
            image="/images/01_1_yearly_comics_children_check.png"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <h4 className={`text-lg font-semibold mb-3 ${themeColors.text}`}>
              데이터 필터링 (핵심)
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`# 만화/어린이 장르 필터링
cat_df = df[df['category'].isin(['만화', '어린이'])]

# 연도별 카테고리별 진입 횟수
year_count = cat_df.groupby(['year', 'category']).size().unstack(fill_value=0)

# 시각화
plt.figure(figsize=(10, 7))
year_count.plot(kind='bar', stacked=True)

# 합계 표시
for i, (year, row) in enumerate(year_count.iterrows()):
    total = row.sum()
    plt.text(i, total + 3, f'{int(total)}회', ha='center')`}
            </CodeBlock>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              분석 결과
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`2020년: 117회 (19.5%)
2021년: 138회 (23.0%)
2022년: 154회 (25.7%) ← +2.7%p
2023년: 149회 (24.8%)
2024년: 100회 (16.7%)
2025년: 84회 (13.7%)`}
            </CodeBlock>
            <HighlightBox isDarkMode={isDarkMode} themeColors={themeColors}>
              <strong>인사이트:</strong> 저가·저페이지 장르(만화/어린이)의
              비중이 2021년 23.0%에서 2022년 25.7%로 증가하면서 전체 평균을
              하락시키는 효과가 있었습니다.
            </HighlightBox>
          </VisualizationSection>

          <VisualizationSection
            title="4.4 2022년 하락 원인 검증 (2): 장르별 가격 비교"
            image="/images/01_2_price_verification_by_genre.png"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <h4 className={`text-lg font-semibold mb-3 ${themeColors.text}`}>
              데이터 필터링 (핵심)
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`# 장르별 분리
comics_df = df[df['category'] == '만화']
children_df = df[df['category'] == '어린이']
general_df = df[~df['category'].isin(['만화', '어린이'])]

# 연도별 평균 가격
comics_price = comics_df.groupby('year')['price'].mean()
children_price = children_df.groupby('year')['price'].mean()
general_price = general_df.groupby('year')['price'].mean()

# 3개 라인 플롯
plt.plot(general_price.index, general_price.values, label='만화/어린이 제외')
plt.plot(comics_price.index, comics_price.values, label='만화', linestyle='--')
plt.plot(children_price.index, children_price.values, label='어린이', linestyle='--')`}
            </CodeBlock>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              분석 결과
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`만화/어린이 제외 일반 도서:
- 2021년: 16,541원 (추정)
- 2022년: 16,006원 (추정)
- 변화: -3.2%

만화 평균 가격: 약 10,000원대 (일반 도서 대비 낮음)
어린이 평균 가격: 약 12,000원대 (일반 도서 대비 낮음)`}
            </CodeBlock>
            <HighlightBox isDarkMode={isDarkMode} themeColors={themeColors}>
              <strong>인사이트:</strong> 만화/어린이를 제외한 일반 도서만
              분석해도 가격 하락이 관찰되며, 이는 일반 도서 자체의 변화가 주된
              요인임을 시사합니다.
            </HighlightBox>
          </VisualizationSection>

          <VisualizationSection
            title="4.5 2022년 하락 원인 검증 (3): 장르별 페이지 수 비교"
            image="/images/02_1_page_verification_by_genre.png"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <h4 className={`text-lg font-semibold mb-3 ${themeColors.text}`}>
              데이터 필터링 (핵심)
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`# page_count > 0 필터링 후 장르별 분리
comics_pages = comics_df[comics_df['page_count'] > 0].groupby('year')['page_count'].mean()
children_pages = children_df[children_df['page_count'] > 0].groupby('year')['page_count'].mean()
general_pages = general_df[general_df['page_count'] > 0].groupby('year')['page_count'].mean()

# 3개 라인 플롯
plt.plot(general_pages.index, general_pages.values, label='만화/어린이 제외')
plt.plot(comics_pages.index, comics_pages.values, label='만화', linestyle='--')
plt.plot(children_pages.index, children_pages.values, label='어린이', linestyle='--')`}
            </CodeBlock>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              분석 결과
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`만화/어린이 제외 일반 도서:
- 2021년: 412쪽 (추정)
- 2022년: 355쪽 (추정)
- 변화: -13.8%

만화 평균 페이지: 약 200쪽 내외
어린이 평균 페이지: 약 180쪽 내외`}
            </CodeBlock>
            <HighlightBox isDarkMode={isDarkMode} themeColors={themeColors}>
              <p className={`font-semibold mb-2 ${themeColors.text}`}>
                핵심 인사이트:
              </p>
              <p className={`mb-3 ${themeColors.secondary}`}>
                2022년 가격·페이지 하락은 <strong>이중 구조</strong>로
                설명됩니다:
              </p>
              <ol className={`list-decimal pl-6 ${themeColors.secondary}`}>
                <li>
                  <strong>일반 도서 자체의 변화</strong> (가장 큰 원인): 페이지
                  수가 412쪽→355쪽으로 감소 (-13.8%)
                </li>
                <li>
                  <strong>저가·저페이지 장르 비중 증가:</strong> 만화/어린이가
                  23.0%→25.7%로 증가 (+2.7%p)
                </li>
              </ol>
              <p className={`mt-3 ${themeColors.secondary}`}>
                이를 통해{" "}
                <strong>
                  베스트셀러 평균 지표가 장르 구성에 매우 민감하게 반응
                </strong>
                함을 실증했으며, 시장 분석 시 장르별 분해 분석의 필요성을
                확인했습니다.
              </p>
            </HighlightBox>
          </VisualizationSection>

          {/* 시각화 6-9: 카테고리 및 트렌드 분석 - 간략화 */}
          <VisualizationSimple
            title="4.6 카테고리별 베스트셀러 진입 도서 수"
            image="/images/03_category_book_count.png"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <CodeBlock isDarkMode={isDarkMode}>
              {`TOP 5 카테고리:
1. 소설/시/희곡: 741개
2. 만화: 453개
3. 인문학: 335개
4. 경제경영: 314개
5. 어린이: 289개`}
            </CodeBlock>
          </VisualizationSimple>

          <VisualizationSimple
            title="4.7 연도별 카테고리 비중 변화 (TOP 5)"
            image="/images/04_yearly_category_ratio.png"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <CodeBlock isDarkMode={isDarkMode}>
              {`주요 트렌드:
소설/시/희곡: 지속적으로 30% 내외 유지
만화: 2020년 17% → 2023년 32% (정점) → 2025년 15%
인문학: 2020년 8% → 2025년 23% (약 3배 증가)
경제경영: 2021년 20% → 2025년 8% (급감)
어린이: 2020~2025년 지속 감소 추세`}
            </CodeBlock>
          </VisualizationSimple>

          <VisualizationSection
            title="4.8 슬램덩크 영화 개봉 효과"
            image="/images/04_1_slamdunk_yearly_count.png"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <h4 className={`text-lg font-semibold mb-3 ${themeColors.text}`}>
              데이터 필터링 (핵심)
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`# 슬램덩크 관련 도서 필터링
slamdunk_df = df[df['title'].str.contains('슬램덩크', na=False, case=False)]

# 연도별 진입 횟수 (2020~2025 모든 연도 포함)
all_years = range(2020, 2026)
yearly_slamdunk = slamdunk_df.groupby('year').size()
yearly_slamdunk = yearly_slamdunk.reindex(all_years, fill_value=0)

# 시각화
plt.bar(yearly_slamdunk.index, yearly_slamdunk.values)
plt.axvline(2023, color='gold', linestyle='--', 
            label='영화 개봉 (2023.01.04)')`}
            </CodeBlock>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              분석 결과
            </h4>
            <p className={`mb-3 ${themeColors.secondary}`}>
              <strong>슬램덩크 관련 도서 진입:</strong>
            </p>
            <CodeBlock isDarkMode={isDarkMode}>
              {`2020~2022년: 0회
2023년: 53회 ← 영화 개봉 (2023.01.04)
2024년: 1회
2025년: 0회`}
            </CodeBlock>
            <p className={`mb-3 mt-4 ${themeColors.secondary}`}>
              <strong>만화 비중 변화:</strong>
            </p>
            <CodeBlock isDarkMode={isDarkMode}>
              {`2022년: 25%
2023년: 32% ← 정점 (슬램덩크가 만화 진입의 46% 차지)
2024년: 20%`}
            </CodeBlock>
            <HighlightBox isDarkMode={isDarkMode} themeColors={themeColors}>
              <strong>인사이트:</strong> 영화 흥행(490만 관객)과 원작 판매 증가
              간 강한 상관관계를 확인했습니다.
            </HighlightBox>
          </VisualizationSection>

          <VisualizationSimple
            title="4.9 월별 카테고리 트렌드 (2020~2024년)"
            image="/images/05_monthly_category_pattern.png"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <p className={`mb-3 ${themeColors.secondary}`}>
              시각적 가독성을 위해 베스트셀러 진입 비중이 높은 상위 3개
              카테고리(소설, 경제경영, 만화)를 선정하여 월별 트렌드를 분석함.
            </p>
            <CodeBlock isDarkMode={isDarkMode}>
              {`소설/시/희곡: 10월 급증 (2024년 한강 노벨문학상 효과)
경제경영: 12월~1월 상승, 이후 감소 (반복 패턴 관찰)`}
            </CodeBlock>
            <HighlightBox isDarkMode={isDarkMode} themeColors={themeColors}>
              <strong>인사이트:</strong> 소설은 외부 이벤트에 즉각 반응하며,
              경제경영은 연말연초 계절성을 보입니다.
            </HighlightBox>
          </VisualizationSimple>

          {/* 시각화 10-12: 한강 노벨문학상 효과 */}
          <VisualizationSection
            title="4.10 한강 노벨문학상 vs 소설 시장 점유율"
            image="/images/11_han_kang_vs_total_novels.png"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <h4 className={`text-lg font-semibold mb-3 ${themeColors.text}`}>
              데이터 필터링 (핵심)
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`# 한강 작가 도서 필터링
han_kang = df[df['author'].str.contains('한강', na=False)]

# 연월 컬럼 생성
han_kang['year_month'] = han_kang['year'].astype(str) + '-' + \\
                         han_kang['month'].astype(str).str.zfill(2)

# 월별 진입 횟수
han_kang_monthly = han_kang.groupby('year_month').size()

# 소설 시장 전체
novel_df = df[df['category'] == '소설/시/희곡']
novel_df['year_month'] = novel_df['year'].astype(str) + '-' + \\
                         novel_df['month'].astype(str).str.zfill(2)
novel_monthly = novel_df.groupby('year_month').size()

# 점유율 계산
share = (han_kang_monthly / novel_monthly * 100).fillna(0)`}
            </CodeBlock>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              분석 결과
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`소설 시장 내 점유율:
수상 전 평균 (2020.1~2024.9): 0.5%
수상 후 평균 (2024.10~2025.11): 7.2%
증가: +6.7%p (14.4배)

월별 최고점: 2024년 10월 17.3%`}
            </CodeBlock>
            <HighlightBox isDarkMode={isDarkMode} themeColors={themeColors}>
              <p className={`font-semibold mb-2 ${themeColors.text}`}>
                핵심 인사이트:
              </p>
              <p className={themeColors.secondary}>
                노벨문학상 수상(2024.10.10) 직후 한강 작가의 도서가 소설 시장의{" "}
                <strong>17.3%를 점유</strong>하며 폭발적인 반응을 보였습니다.
                이후 점유율은 점진적으로 감소하지만, 수상 후 14개월 평균 7.2%로{" "}
                <strong>수상 전 대비 14.4배 증가</strong>를 유지하고 있습니다.
              </p>
              <p className={`mt-3 ${themeColors.secondary}`}>
                이는{" "}
                <strong>
                  외부 문화적 이벤트가 출판 시장에 즉각적이고 지속적인 영향
                </strong>
                을 미친다는 것을 보여주며, 특히 권위 있는 상(노벨상)의 효과가
                장기간 지속됨을 실증했습니다.
              </p>
            </HighlightBox>
          </VisualizationSection>

          <VisualizationSection
            title="4.11 한강 작가 노벨문학상 수상 전후 비교"
            image="/images/12_han_kang_before_after.png"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <h4 className={`text-lg font-semibold mb-3 ${themeColors.text}`}>
              데이터 필터링 (핵심)
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`# 수상 전/후 분리
before_nobel = han_kang[
    (han_kang['year'] < 2024) | 
    ((han_kang['year'] == 2024) & (han_kang['month'] < 10))
]
after_nobel = han_kang[
    ((han_kang['year'] == 2024) & (han_kang['month'] >= 10)) | 
    (han_kang['year'] == 2025)
]

before_count = len(before_nobel)
after_count = len(after_nobel)
increase_rate = (after_count / before_count - 1) * 100`}
            </CodeBlock>

            <h4
              className={`text-lg font-semibold mb-3 mt-6 ${themeColors.text}`}
            >
              분석 결과
            </h4>
            <CodeBlock isDarkMode={isDarkMode}>
              {`베스트셀러 진입 횟수:
수상 전 (2020.1~2024.9, 57개월): 7회
수상 후 (2024.10~2025.11, 14개월): 60회
증가율: +757% (약 8.6배)`}
            </CodeBlock>
            <HighlightBox isDarkMode={isDarkMode} themeColors={themeColors}>
              <p className={`font-semibold mb-2 ${themeColors.text}`}>
                핵심 인사이트:
              </p>
              <p className={`mb-3 ${themeColors.secondary}`}>
                한강 작가의 베스트셀러 진입 빈도 분석 결과:
              </p>
              <ol className={`list-decimal pl-6 mb-3 ${themeColors.secondary}`}>
                <li>
                  <strong>수상 전 (57개월):</strong> 평균 월 0.12회 진입
                  (8.1개월에 1번)
                </li>
                <li>
                  <strong>수상 후 (14개월):</strong> 평균 월 4.29회 진입 (매달
                  4.3번)
                </li>
              </ol>
              <p className={`mb-3 ${themeColors.secondary}`}>
                이는 <strong>월평균 진입 빈도 35.7배 증가</strong>
                (0.12회→4.29회)를 의미합니다.
              </p>
              <p className={`mb-2 ${themeColors.secondary}`}>
                특히 주목할 점은:
              </p>
              <ul className={`list-disc pl-6 mb-3 ${themeColors.secondary}`}>
                <li>수상 전: 주로 신작 출간 시기에만 베스트셀러 진입</li>
                <li>
                  수상 후: 구작을 포함한 전작이 동시다발적으로 베스트셀러 진입
                </li>
              </ul>
              <p className={themeColors.secondary}>
                이를 통해{" "}
                <strong>
                  노벨상이 단순히 신작 판매에만 영향을 미치는 것이 아니라,
                  작가의 전체 작품군에 대한 재평가와 수요 증가로 이어진다
                </strong>
                는 "후광 효과(Halo Effect)"를 확인했습니다.
              </p>
            </HighlightBox>
          </VisualizationSection>

          <VisualizationSimple
            title="4.12 한강 작가 작품별 베스트셀러 진입 횟수 TOP 5"
            image="/images/13_han_kang_books_count.png"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <CodeBlock isDarkMode={isDarkMode}>
              {`한강 작가 작품별 진입 횟수:
1. 작별하지 않는다: 13회
2. 소년이 온다: 13회
3. 채식주의자 (리마스터판): 8회
4. 흰: 5회
5. 서랍에 저녁을 넣어 두었다: 5회`}
            </CodeBlock>
            <p className={`mt-3 ${themeColors.secondary}`}>
              대표작 2개(작별하지 않는다, 소년이 온다)가 수상 후 집중적으로
              베스트셀러에 진입했습니다.
            </p>
          </VisualizationSimple>

          <NoteBox isDarkMode={isDarkMode} themeColors={themeColors}>
            전체 시각화 코드는{" "}
            <a
              href="https://github.com/su0907/aladin-reading-trend-project/blob/main/notebooks/03_visualization.ipynb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub Repository
            </a>
            에서 확인 가능합니다.
          </NoteBox>
        </Section>

        {/* 5. 결론 */}
        <Section
          title="5. 결론"
          isDarkMode={isDarkMode}
          themeColors={themeColors}
        >
          <p className={`mb-6 ${themeColors.secondary}`}>
            본 프로젝트는 2020~2025년 알라딘 베스트셀러 3,517개를 분석하여
            다음과 같은 핵심 인사이트를 도출했습니다.
          </p>

          <SubSection
            title="주요 발견"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <HighlightBox isDarkMode={isDarkMode} themeColors={themeColors}>
              <h4 className={`font-bold mb-2 ${themeColors.text}`}>
                1. 외부 문화 이벤트의 즉각적 영향
              </h4>
              <ul className={`list-disc pl-6 mb-4 ${themeColors.secondary}`}>
                <li>
                  <strong>한강 노벨문학상:</strong> 베스트셀러 진입 8.6배 증가,
                  소설 시장 점유율 14.4배 증가
                </li>
                <li>
                  <strong>슬램덩크 영화:</strong> 원작 만화 53회 진입, 만화 비중
                  32% 정점 달성
                </li>
              </ul>

              <h4 className={`font-bold mb-2 ${themeColors.text}`}>
                2. 장르 구성의 민감성
              </h4>
              <ul className={`list-disc pl-6 mb-4 ${themeColors.secondary}`}>
                <li>
                  2022년 가격·페이지 하락은 일반 도서 자체 변화(-3.2%, -13.8%) +
                  저가 장르 비중 증가(+2.7%p)의 복합 효과
                </li>
                <li>
                  베스트셀러 평균 지표는 장르 구성 변화에 매우 민감하게 반응
                </li>
                <li>
                  베스트셀러 시장과 전체 출판 시장은 독립적으로 작동 (2022년
                  베스트셀러 하락 vs 전체 신간 상승)
                </li>
              </ul>

              <h4 className={`font-bold mb-2 ${themeColors.text}`}>
                3. 장기 독서 트렌드
              </h4>
              <ul className={`list-disc pl-6 ${themeColors.secondary}`}>
                <li>
                  <strong>인문학 3배 성장</strong>(8%→23%),{" "}
                  <strong>경제경영 급감</strong>(20%→8%),{" "}
                  <strong>어린이 완만한 감소</strong>
                </li>
                <li>5년간 카테고리 구조의 점진적 변화 확인</li>
              </ul>
            </HighlightBox>

            <div
              className={`mt-6 p-6 rounded-lg ${
                isDarkMode ? "bg-blue-900/20" : "bg-blue-50"
              } border-l-4 ${
                isDarkMode ? "border-blue-500" : "border-blue-600"
              }`}
            >
              <p className={`font-bold text-lg mb-2 ${themeColors.text}`}>
                결론:
              </p>
              <p className={themeColors.secondary}>
                베스트셀러 시장은 <strong>(1) 외부 이벤트의 단기 충격</strong>,{" "}
                <strong>(2) 장르 구성 변화</strong>,
                <strong>(3) 장기 독서 트렌드</strong>가 복합적으로 작용하며,
                정확한 시장 분석을 위해서는 이 세 가지를 종합적으로 고려해야
                합니다.
              </p>
            </div>
          </SubSection>

          <SubSection
            title="프로젝트의 한계"
            isDarkMode={isDarkMode}
            themeColors={themeColors}
          >
            <div className="space-y-4">
              <div
                className={`p-4 rounded-lg ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
              >
                <h4 className={`font-bold mb-2 ${themeColors.text}`}>
                  1. 데이터 범위의 한계
                </h4>
                <ul className={`list-disc pl-6 ${themeColors.secondary}`}>
                  <li>알라딘 단일 플랫폼만 분석 (교보문고, YES24 등 미포함)</li>
                  <li>베스트셀러 중심 분석으로 전체 출판 시장과 차이 가능</li>
                </ul>
              </div>

              <div
                className={`p-4 rounded-lg ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
              >
                <h4 className={`font-bold mb-2 ${themeColors.text}`}>
                  2. 인과관계 검증의 한계
                </h4>
                <ul className={`list-disc pl-6 ${themeColors.secondary}`}>
                  <li>외부 이벤트와 판매 증가 간 강한 상관관계 확인</li>
                  <li>
                    직접적 인과관계 입증을 위해서는 추가 연구 필요 (언론 보도량,
                    SNS 확산, 독자 구매 동기 등)
                  </li>
                </ul>
              </div>
            </div>
          </SubSection>
        </Section>

        {/* 6. GitHub Repository */}
        <div
          className={`${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded-lg shadow-xl p-8`}
        >
          <h2 className={`text-3xl font-bold mb-4 ${themeColors.text}`}>
            GitHub Repository
          </h2>
          <p className={`mb-4 ${themeColors.secondary}`}>
            <strong>프로젝트 전체 코드 및 데이터:</strong>
          </p>
          <a
            href="https://github.com/su0907/aladin-reading-trend-project/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-lg font-semibold mb-6"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub에서 전체 프로젝트 보기
          </a>

          <p className={`mb-3 ${themeColors.text} font-semibold`}>포함 내용:</p>
          <ul className={`list-disc pl-6 ${themeColors.secondary} space-y-1`}>
            <li>크롤링 코드 (1차, 2차)</li>
            <li>전처리 코드</li>
            <li>시각화 코드 (15개 메인 시각화)</li>
            <li>최종 데이터 (aladin_final_cleaned.csv)</li>
            <li>프로젝트 문서 (README.md)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// ========== 재사용 가능한 컴포넌트들 ==========

const Section = ({ title, children, isDarkMode, themeColors }) => (
  <div
    className={`${
      isDarkMode ? "bg-gray-800" : "bg-white"
    } rounded-lg shadow-xl p-8 mb-8`}
  >
    <h2
      className={`text-3xl font-bold mb-6 ${themeColors.text} border-b-2 ${
        isDarkMode ? "border-gray-700" : "border-gray-200"
      } pb-3`}
    >
      {title}
    </h2>
    {children}
  </div>
);

const SubSection = ({ title, children, isDarkMode, themeColors }) => (
  <div className="mb-8">
    <h3 className={`text-2xl font-bold mb-4 ${themeColors.text}`}>{title}</h3>
    {children}
  </div>
);

// 개선된 표 컴포넌트 (이미지처럼 깔끔하게)
const SelectorTable = ({ children, isDarkMode, themeColors }) => (
  <div className="overflow-x-auto mb-4">
    <table
      className={`w-full border-collapse ${
        isDarkMode ? "border-gray-700" : "border-gray-300"
      }`}
      style={{
        borderSpacing: 0,
        border: isDarkMode ? "1px solid #4a5568" : "1px solid #d1d5db",
      }}
    >
      <style>{`
        .selector-table th,
        .selector-table td {
          border: 1px solid ${isDarkMode ? "#4a5568" : "#d1d5db"};
          padding: 12px 16px;
          text-align: left;
        }
        .selector-table th {
          background-color: ${isDarkMode ? "#2d3748" : "#f3f4f6"};
          font-weight: 600;
        }
        .selector-table code {
          background-color: ${isDarkMode ? "#1a202c" : "#e5e7eb"};
          padding: 2px 8px;
          border-radius: 4px;
          font-family: 'Courier New', Consolas, monospace;
          font-size: 0.9em;
          color: ${isDarkMode ? "#93c5fd" : "#1e40af"};
        }
      `}</style>
      <tbody className="selector-table">{children}</tbody>
    </table>
  </div>
);

const DataTable = ({ children, isDarkMode, themeColors }) => (
  <div className="overflow-x-auto mb-4">
    <table
      className={`w-full border-collapse ${
        isDarkMode ? "border-gray-700" : "border-gray-300"
      }`}
      style={{
        borderSpacing: 0,
        border: isDarkMode ? "1px solid #4a5568" : "1px solid #d1d5db",
      }}
    >
      <style>{`
        .data-table th,
        .data-table td {
          border: 1px solid ${isDarkMode ? "#4a5568" : "#d1d5db"};
          padding: 12px 16px;
          text-align: left;
        }
        .data-table th {
          background-color: ${isDarkMode ? "#2d3748" : "#f3f4f6"};
          font-weight: 600;
        }
      `}</style>
      <tbody className="data-table">{children}</tbody>
    </table>
  </div>
);

const CodeBlock = ({ children, isDarkMode }) => (
  <pre
    className={`p-4 rounded-lg overflow-x-auto ${
      isDarkMode ? "bg-gray-900" : "bg-gray-100"
    } text-sm mb-4`}
  >
    <code
      className={isDarkMode ? "text-gray-300" : "text-gray-800"}
      style={{ fontFamily: "'Courier New', Consolas, monospace" }}
    >
      {children}
    </code>
  </pre>
);

const InfoCard = ({ children, isDarkMode, themeColors }) => (
  <div
    className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-gray-50"} ${
      themeColors.secondary
    }`}
  >
    {children}
  </div>
);

const NoteBox = ({ children, isDarkMode, themeColors }) => (
  <div
    className={`mt-4 p-4 rounded-lg ${
      isDarkMode ? "bg-blue-900/20" : "bg-blue-50"
    } border-l-4 ${isDarkMode ? "border-blue-500" : "border-blue-600"} ${
      themeColors.secondary
    }`}
  >
    <strong>Note:</strong> {children}
  </div>
);

const IssueBox = ({ title, children, isDarkMode, themeColors }) => (
  <div
    className={`mb-6 p-6 rounded-lg ${
      isDarkMode ? "bg-yellow-900/20" : "bg-yellow-50"
    } border-l-4 ${isDarkMode ? "border-yellow-500" : "border-yellow-600"}`}
  >
    <h4 className={`font-bold text-lg mb-3 ${themeColors.text}`}>{title}</h4>
    {children}
  </div>
);

const HighlightBox = ({ children, isDarkMode, themeColors }) => (
  <div
    className={`mt-4 p-6 rounded-lg ${
      isDarkMode ? "bg-blue-900/30" : "bg-blue-50"
    } border-l-4 ${isDarkMode ? "border-blue-500" : "border-blue-600"}`}
  >
    {children}
  </div>
);

// 상세 시각화 섹션 (코드 포함)
const VisualizationSection = ({
  title,
  image,
  children,
  isDarkMode,
  themeColors,
}) => (
  <div
    className={`mb-12 p-8 rounded-lg ${
      isDarkMode ? "bg-gray-800" : "bg-white"
    } shadow-xl`}
  >
    <h3 className={`text-2xl font-bold mb-6 ${themeColors.text}`}>{title}</h3>

    {/* 이미지 */}
    <div className="mb-6 rounded-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-auto"
        onError={(e) => {
          e.target.style.display = "none";
          e.target.nextSibling.style.display = "block";
        }}
      />
      <div
        className={`hidden p-8 text-center ${
          isDarkMode ? "bg-gray-700" : "bg-gray-100"
        } ${themeColors.secondary}`}
      >
        이미지를 불러올 수 없습니다
      </div>
    </div>

    {/* 내용 */}
    {children}
  </div>
);

// 간단 시각화 (코드 없음)
const VisualizationSimple = ({
  title,
  image,
  children,
  isDarkMode,
  themeColors,
}) => (
  <div
    className={`mb-8 p-6 rounded-lg ${
      isDarkMode ? "bg-gray-800" : "bg-white"
    } shadow-xl`}
  >
    <h3 className={`text-2xl font-bold mb-4 ${themeColors.text}`}>{title}</h3>

    <div className="mb-4 rounded-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-auto"
        onError={(e) => {
          e.target.style.display = "none";
          e.target.nextSibling.style.display = "block";
        }}
      />
      <div
        className={`hidden p-8 text-center ${
          isDarkMode ? "bg-gray-700" : "bg-gray-100"
        } ${themeColors.secondary}`}
      >
        이미지를 불러올 수 없습니다
      </div>
    </div>

    {children}
  </div>
);
