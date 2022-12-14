# 프리온보딩 개인 프로젝트

### 병원 예약 시스템

<br/>

# 소개

#### ✅ 프리온보딩 4차 과제

<br />

# 기간

2022/10/11 ~ 19

<br/>

# 배포 링크

https://hospital-reservation-system.netlify.app/

<br/>

# 사용된 기술 및 라이브러리

> JavaScript

> React

> fetch

> styled-reset

> styled-components

> react-datepicker

> date-fns

> react-hook-form

> react-table

<br/>

# 프로젝트 설치 및 실행 방법

✅ 설치방법

1. Node.JS를 다운받아 설치해주세요. https://nodejs.org/

2. 리포지토리를 클론해주세요.

```
 git clone https://github.com/Roxy100/hospital-reservation-system.git
```

3. dependencies를 설치해주세요.

```
npm install
```

✅ 실행방법

1. 다음 명령어를 이용해 Dev server를 실행해주세요.

```
npm start
```

2. 브라우저에서 <http://localhost:3000>에 접속해주세요.

<br/>

# 주요기능 및 설명

### 1. 메인 페이지

- 메인 페이지로 들어갔을 때, 3개의 페이지로 들어갈 수 있는 link 태그로 구현하여 클릭했을 때, 해당 페이지로 이동하게 했습니다.

### 2. 병원 예약 가능 목록 페이지

- 해당 날짜를 클릭하면, 선택가능한 날짜만 선택할 수 있게 UI 라이브러리를 이용한 커스텀 설정으로 접목했습니다.
- 그리고 그 날짜를 선택하면 목록리스트에 해당 요일이 변화하는 것도 넣어주었습니다.
- 예약가능 목록 페이지를 확인하고, 등록 페이지로 갈 수 있도록 버튼 UI를 구현하였습니다.

### 3. 병원 예약 등록 페이지

- 만약, 예약자이름을 넣지 않을 시 alert창과 에러 메시지로 구현하였습니다. 그리고 이름이 최소 3글자 이상이어야 가능한 것도 넣어주었습니다.
- 해당 병원이름을 선택하면 해당하는 예약시간들이 나오도록 기능구현하였습니다.
- 예약자, 병원이름, 예약시간, 예약종류 선택하고, 등록버튼을 눌렀을 때, alert창으로 선택한 해당 값들이 나오도록 구현하였습니다.

### 4. 병원 예약 내역 조회 페이지

- react-table 라이브러리를 이용하여 가짜 데이타 조회 목록을 만든 후, 예약자이름으로 검색시, 해당 객체 (행)로 나오게끔 구현하려했으나, 제대로 구현하지 못한 점이 아쉽습니다.
