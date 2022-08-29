![구딩 copy](https://user-images.githubusercontent.com/77870077/187223761-c19d0863-9c26-4906-8c36-a2a210c053d5.jpg)

<h1><p align="center">📮 구딩 📮<p></h1>
<p align="center">
  <img width="89" alt="구딩 로고" src="public/gooding_logo.png">
</p>

> 구딩과 함께 한 눈에 편리하게 구독을 관리해보세요!

<br />

## 목차

1. [**📕 배포 링크**](#1)
2. [**📗 조원 소개**](#2)
3. [**📘 프로젝트 소개**](#3)
4. [**📙 개발 소개용**](#4)

<br />

<div id="1"></div>

## 📕 배포 링크

[**🔗 구딩 링크**](https://gooding.vercel.app/)

<br />

<div id="2"></div>

## 📗 조원 소개

| Nickname |                                       Profile                                       |                                     Github                                      |
| :------: | :---------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------: |
|   EASY   |  <img src="https://github.com/thinkanddoit.png" alt="EASY 프로필" width="100px" />  |   <a href="https://github.com/thinkanddoit" target="_blank">@thinkanddoit</a>   |
|   레프   |    <img src="https://github.com/anottrx.png" alt="레프 프로필" width="100px" />     |        <a href="https://github.com/anottrx" target="_blank">@anottrx</a>        |
|   Hyun   |     <img src="https://github.com/qlemql.png" alt="Hyun 프로필" width="100px" />     |         <a href="https://github.com/qlemql" target="_blank">@qlemql</a>         |
|  찌나오  |    <img src="https://github.com/zzinao.png" alt="찌나오 프로필" width="100px" />    |         <a href="https://github.com/zzinao" target="_blank">@zzinao</a>         |
|    준    |  <img src="https://github.com/Junseongparkme.png" alt="준 프로필" width="100px" />  | <a href="https://github.com/Junseongparkme" target="_blank">@Junseongparkme</a> |
|  Ayaan   | <img src="https://github.com/LEEHYUNHO2001.png" alt="Ayaan 프로필" width="100px" /> |  <a href="https://github.com/LEEHYUNHO2001" target="_blank">@LEEHYUNHO2001</a>  |
|   나동   |   <img src="https://github.com/Najeong-Kim.png" alt="나동 프로필" width="100px"/>   |    <a href="https://github.com/Najeong-Kim" target="_blank">@Najeong-Kim</a>    |

<br />

## 📘 프로젝트 소개

### 로그인 페이지

<img width="1294" alt="20220829_231432" src="https://user-images.githubusercontent.com/59449215/187222090-51ab0ce8-7b0e-4d47-96e7-78d0221e44d9.png">

- 로그인
  - 유저 닉네임 로컬스토리지에 저장
  - 유저 정보 전역 상태 관리에 저장
- 로그인 체크
  - 로컬 스토리지에 유저 정보 구딩 서비스 이용 가능

<br>

### 소개 페이지(로그인 페이지 하단)

<br>

### 메인 페이지

<img width="1439" alt="image" src="https://user-images.githubusercontent.com/73640737/187179108-6fdcdfd1-24da-42f7-b95f-8bec694e4f3e.png">

- 로그아웃
  - 유저의 로컬스토리지값 삭제
  - 전역 상태관리에서 유저 정보 초기화
- Big Calendar 라이브러리를 커스텀
  - 텍스트만 들어갈 수 있는 라이브러리에 이미지가 들어갈 수 있도록 구현
  - 캘린더 헤더를 커스텀
- 로그인한 유저와 구독한 서비스를 확인
  - 결제일에 따라 다음 결제 UI를 보여주는 로직

<br>

### 구독 추가 모달

<img width="1437" alt="image" src="https://user-images.githubusercontent.com/73640737/187179264-7b4a5da7-094e-4cfd-b21c-a036d86d512e.png"> 
<img width="1300" alt="20220829_231633" src="https://user-images.githubusercontent.com/59449215/187222409-8c319b16-e3be-4189-94c9-31c71980ac89.png">

- 카테고리별로 구독 추가

<br>

### 내 구독 보기

<img width="1439" alt="image" src="https://user-images.githubusercontent.com/73640737/187179552-c4d66754-b425-41e7-976f-a985a1516dee.png">

- 자신의 구독 정보를 확인
  - 유저 별 구독 백분율에 따른 칭호 부여
- 구독 목록 카테고리에 따라 분류

<br />

<div id="4"></div>

<br>

## 📙 개발 소개

### 프로젝트 과정

[**🔗 피그잼 링크**](https://www.figma.com/file/TkcVY7Nj8J1mNupusqx24h/%ED%85%8C%EC%98%A4%EC%9D%98-%EC%8A%A4%ED%94%84%EB%A6%B0%ED%8A%B8-11%EA%B8%B0---3%EC%A1%B0-%3C%EA%B5%AC%EB%94%A9%3E?node-id=0%3A1)  
[**🔗 피그마 링크**](https://www.figma.com/file/R70yYITQdYefeDgaZzL8tI/%EA%B5%AC%EB%94%A9?node-id=0%3A1)

### 기술스택

<div align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/emotion-DB7093?style=flat-square&logoColor=white"/>
</div>

### lighthouse 성능 측정 결과

|                                  로그인 화면                                  |
| :---------------------------------------------------------------------------: |
| <img src="public/lighthouse_login.png" alt="lighthouse_login" width="600px"/> |

|                                캘린더 화면                                |
| :-----------------------------------------------------------------------: |
| <img src="public/lighthouse_cal.png" alt="lighthouse_cal" width="600px"/> |

<br />
<br />
