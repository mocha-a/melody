# 🎶 멜로디

![Image](https://github.com/user-attachments/assets/80d6bac4-823d-4786-8f7e-29063fc53c29)

> 산리오 캐릭터 잡화 모바일 쇼핑몰 - 멜로디
일본 인기 캐릭터 산리오 캐릭터의 잡화 상품을 간편하게 구입할 수 있는 모바일 쇼핑몰 웹사이트
> 

---

## 📑 요약

### 1. **주제**

- '산리오' 캐릭터 전용 쇼핑몰

### 2. **목표**

- 다양한 산리오 잡화 물품 구입 가능

### 3. **개발 환경**

- Front-End : React, Zustand, React Router
- Back-End : PHP, MySQL, xampp

### 4. **기간 및 인원**

- 2025-05-14 ~ 2025-05-23 (10일), 2인

---

## **🖥️** 배포 링크

## 👉 [melody🎵](https://melody2-pi.vercel.app/)

## **🙋‍♀️** 만든 사람

**김도연, 안지현**

- ✏️ 공통 직무 : 기획, 디자인, 개발 및 문서 정리

|  | 도연 | 지현 |
| :---: | :---: | :---: |
| 💜 깃허브 | [dododoodo](https://github.com/dododoodo) | [mocha-a](https://github.com/mocha-a) |
| 💌 이메일 | [nsa10050@gmail.com](mailto:nsa10050@gmail.com) | [anji64852563@gmail.com](mailto:anji64852563@gmail.com) |

---

## 📱 주요 기능

- SPA(Single Page Application) 기반으로 빠르고 끊김 없는 페이지 전환
- 모바일 환경 최적화로 언제 어디서나 편리한 이용
- 자체 회원가입 및 로그인 기능 제공
- 다양한 상품 카테고리를 통해 원하는 상품 쉽게 탐색
- 검색 기능으로 원하는 상품을 빠르게 찾을 수 있음
- 위시리스트 및 장바구니 기능으로 관심 상품 관리
- 상품 구매 및 주문 내역 확인 기능 제공

---

## 💼 프로젝트 폴더 구조

```
📦melody                     # melody ( Front-End )
 ┣ 📂public
 ┃ ┣ 📂img
 ┃ ┗ 📜index.html
 ┣ 📂src
 ┃ ┣ 📂api
 ┃ ┣ 📂components            # 컴포넌트 폴더
 ┃ ┃ ┣ 📂icon                # 아이콘 컴포넌트 폴더
 ┃ ┃ ┣ 📂Join
 ┃ ┃ ┣ 📂public              # 공통 컴포넌트 폴더
 ┃ ┃ ┣ 📂MainPage
 ┃ ┃ ┣ 📂ListPage
 ┃ ┃ ┣ 📂MyPage
 ┃ ┃ ┣ 📂CartPage
 ┃ ┃ ┣ 📂ProductPage
 ┃ ┃ ┗ 📂PaymentPage
 ┃ ┃ ┗ 📂SearchPage
 ┃ ┣ 📂font                  # 폰트 폴더
 ┃ ┣ 📂pages                 # 각 페이지 컴포넌트 폴더
 ┃ ┃ ┗ 📂join
 ┃ ┣ 📂routes
 ┃ ┃ ┗ 📜Router.js           # 페이지 라우팅 관리
 ┃ ┣ 📂styles                # scss
 ┃ ┗ 📜App.js                # 프로젝트의 전체 라우팅 및 최상위 컴포넌트
 ┣ 🔗.env                    # 환경변수
 ┗ 📜README.md
 
 📦admin                     # melody ( Back-End )
 ┣ 📂api                     # 백엔드 API Endpoint (프론트에서 호출하는 PHP API 파일들)
 ┃ ┣ 📂cart                  # 장바구니 관련 API
 ┃ ┣ 🐘member.php            # 회원 정보 처리 API
 ┃ ┣ 🐘member_login.php      # 로그인 처리 API
 ┃ ┣ 🐘order.php             # 주문 처리 API
 ┃ ┣ 🐘orderList.php         # 주문 목록 조회 API
 ┃ ┣ 🐘p_category.php        # 상품 카테고리 API
 ┃ ┣ 🐘p_list.php            # 상품 목록 조회 API
 ┃ ┣ 🐘product_filter.php    # 상품 필터 API
 ┃ ┗ 🐘wish.php              # 찜하기 기능 API
 ┣ 📂member                  # 관리자 회원 관련 PHP 파일
 ┣ 📂product                 # 관리자 상품 관련 PHP 파일
 ┣ 🐘config.php              # MySQL 연결
 ┗ 🐘table.php               # MySQL 테이블 생성
```

---

## 🛠️ 사용 기술

### 1. Frond-End

| 사용기술 | 설명 |Badge |
| :---:| :---: | :---: |
| **React** | **프론트엔드 프레임워크 (SPA 구축)** |![react](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)|
| **React Router Dom** | **페이지 라우팅 관리** |![reactrouter](https://img.shields.io/badge/ReactRouter-CA4245?style=flat-square&logo=reactrouter&logoColor=white)|
| **Axios** | **HTTP 클라이언트 라이브러리** |![axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)|
| **Zustand** | **상태 관리**|![Zustand](https://img.shields.io/badge/Zustand-181717?style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAv0lEQVQ4jeVUMQ7DIAx0KmZGlJGJB+RBjLyC1/ADVr7AC8gzCBJs7lCpUhqw0qpDqp7kxSefDWd5QkQYwVqLQogh/4oYIwAiDiOlhO/AOYe30+1P4g8FGUUqpSaC7q4Hs9ai1rorFkJAKeUuX0qBZVmGjZgQApRSXVJKeeByzsTQv2DK911urXX/hXMOpZQDt20bcM67NbVWmKjj8AnIJ6/rivDYt2fknMkJrm/K9QXJ4+C9h3med7laKxhjhjV3vjqJYwKihcAAAAAASUVORK5CYII=&logoColor=white)|

### 2. Back-End

| 사용기술 | 설명 | Badge |
| :---:| :---: | :---: |
| **PHP** | **백엔드 언어** |![php](https://img.shields.io/badge/php-777BB4?style=flat-square&logo=php&logoColor=white)|
| **MySQL** | **데이터베이스** |![mysql](https://img.shields.io/badge/mysql-4479A1?style=flat-square&logo=mysql&logoColor=white)|
| **xampp** | **로컬에서 Apache, MySQL, PHP<br>서버를 한번에 실행** |![xampp](https://img.shields.io/badge/xampp-FB7A24?style=flat-square&logo=xampp&logoColor=white)|

### 3. UI/UX

| 사용기술 | 설명 | Badge |
| :---:| :---: | :---: |
| **MUI** | **UI 프레임워크** |![mui](https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=mui&logoColor=white) |
| **Swiper** | **슬라이더** |![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=axios&logoColor=white)|
| **motion** | **애니메이션** |![motion](https://img.shields.io/badge/motion-fff312?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQgOSI+CiAgPHBhdGggZD0iTSA5LjA2MiAwIEwgNC4zMiA4Ljk5MiBMIDAgOC45OTIgTCAzLjcwMyAxLjk3MSBDIDQuMjc3IDAuODgyIDUuNzA5IDAgNi45MDIgMCBaIE0gMTkuNjU2IDIuMjQ4IEMgMTkuNjU2IDEuMDA2IDIwLjYyMyAwIDIxLjgxNiAwIEMgMjMuMDA5IDAgMjMuOTc2IDEuMDA2IDIzLjk3NiAyLjI0OCBDIDIzLjk3NiAzLjQ5IDIzLjAwOSA0LjQ5NiAyMS44MTYgNC40OTYgQyAyMC42MjMgNC40OTYgMTkuNjU2IDMuNDkgMTkuNjU2IDIuMjQ4IFogTSA5Ljg3MiAwIEwgMTQuMTkyIDAgTCA5LjQ1IDguOTkyIEwgNS4xMyA4Ljk5MiBaIE0gMTQuOTc0IDAgTCAxOS4yOTQgMCBMIDE1LjU5MiA3LjAyMSBDIDE1LjAxOCA4LjExIDEzLjU4NSA4Ljk5MiAxMi4zOTIgOC45OTIgTCAxMC4yMzIgOC45OTIgWiIgZmlsbD0icmdiKDAsIDAsIDApIj48L3BhdGg+Cjwvc3ZnPgo=&logoColor=white)|
| **Sass** | **스타일링**|![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white)|

### 4. 개발 도구

|사용기술 | 설명 | Badge | 
|:---:| :---: |:---: |
| **Visual Studio Code<br>(VS Code)** | **코드 편집기( 에디터 )** |![VSCode](https://img.shields.io/badge/VSCode-007ACC?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjAwMyAyTDEyIDEzLjMwM0w0Ljg0IDhMMiAxMEw4Ljc3MiAxNkwyIDIyTDQuODQgMjRMMTIgMTguNzAyTDI0LjAwMyAzMEwzMCAyNy4wODdWNC45MTNMMjQuMDAzIDJaTTI0IDkuNDM0VjIyLjU2NkwxNS4yODkgMTZMMjQgOS40MzRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K&logoColor=white) |
|**GitHub** | **버전 관리** |![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white)| 
|**Slack** | **협업 도구** |![Slack](https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=slack&logoColor=white)| 
| **Vercel** | **서버리스 플랫폼** |![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)|
| **dothome** | **무료 웹호스팅으로 PHP 서버 배포<br>([nsa10050.dothome.co.kr](http://nsa10050.dothome.co.kr/admin/?url=/admin/product/list.php&num=0))** |![dothome](https://img.shields.io/badge/dothome-22AEE4?style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADqGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4NCjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4NCgk8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPg0KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNEIyQjQzMjQ5QTMxMUU3OTUyNjg4QjQyMjBFN0JGNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNEIyQjQzMzQ5QTMxMUU3OTUyNjg4QjQyMjBFN0JGNSI+DQoJCQk8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNEIyQjQzMDQ5QTMxMUU3OTUyNjg4QjQyMjBFN0JGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNEIyQjQzMTQ5QTMxMUU3OTUyNjg4QjQyMjBFN0JGNSIvPg0KCQk8L3JkZjpEZXNjcmlwdGlvbj4NCgkJPHJkZjpEZXNjcmlwdGlvbiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+PHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj48L3JkZjpEZXNjcmlwdGlvbj48L3JkZjpSREY+DQo8L3g6eG1wbWV0YT4NCjw/eHBhY2tldCBlbmQ9J3cnPz7Bo9ixAAACbklEQVRIS52VTaiNURSG3/VdrvzmXib+iyKUEorBRWTMADMDMz9JMlGGkoEkA1EGlJFCiTLASClkJKQYSMlP/kou4nkNzvcd+6zuuTf3ma13vWuts8/e+9vSCAAzgF3ANeAF8An4BpzM3lEBzASOA288BMCV5F9me2qpjQiwHfiQm5cAl8sa2xeA58CSUm+osmD7UERciojpOTcctn9ExEJJd22vz/mOQcBeScdK7X+JiH7bV4Hlpd4eBKySdLxMjpaI6IuIc8D4RitXdCQi2okS279sX7e93/Zm2+cl9WZfYoWkPR0KsDZvdgPwuF5t6d8K3Eja2SFqXwJTVKxoW1nUYPtJRGyqquphqUdElHE3ImK+pI2SVNnukbQ6m2oORMTbJrA9xvYE272S3GntylrVg2ZImpOztu9XVXWriYF5km7bfivpjKSfnRVdWar6r5smaULOSnqQ4qOS1kXE5IiYnHLD0ad8jxJfUjw3xT0pHpZK0kdJ33NC0oIUX0/xsxR3G/xZau1FBTwY4mi+tt3XuGvfTuAisK8+EE2uB3iUe7jV599XHjiVDW6ZDrdNwwDszLUFW0rjQM66Neg3sKOjawLYAHzNtU4Xtiy4mY1umf8Ap4GOPQNmA0eBwVzTABxs/O0bDqyUdC8ixra7FdgerA/A+/pKLI6ISdlX8Mj2QFVVgx0qMMv2l/yrRkP93Hc8E22AE7lgNAAfh3r4pNaQXfXGfwZeAe+AX7nJSAAPuz3lst0LrAEWAf3ARGAKsBQ4AbzPDTPAM2A3MC73bxjxc297uu2Nkgbqr0W/pN/1oXgq6U5E3IuIH7m25C/8PXPCVobe0AAAAABJRU5ErkJggg==&logoColor=white)|
| **Figma** | **디자인 & UI/UX**|![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white) |
### 

---

## **🌠** 트러블슈팅 (Troubleshooting)

> 개발 중 이슈와 해결 방안
>
<h3>✅ListPage.jsx</h3>
   ① 초기에는 URL 파라미터에서 카테고리 이름을 직접 가져와 사용했으나, 카테고리가 확장됨에 따라 소카테고리 이름이 누락되는 문제 발생

   ```
    => 해결 방안 : 버거 메뉴에서 선택한 카테고리 정보를 localStorage에 저장하여,
                   파라미터에 의존하지 않고 안정적으로 카테고리 이름을 표시하도록 구현
   ```

    
   ② 상품을 클릭한 후 상세 페이지에서 뒤로 가기 시 데이터가 완전히 로드되기 전에 렌더링이 발생해 에러가 나는 현상 발생

   ```
    => 해결 방안 : 데이터 배열의 length 값을 체크하여, 데이터가 없으면 렌더링을 하지 않고 로딩 상태 또는 빈 화면을 표시하도록 처리
   ```

---

## **🖼️** 미리보기 (Preview)
![Image](https://github.com/user-attachments/assets/b3a42c43-9370-4ddd-bde3-6aee75bea801)
