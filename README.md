## <h1>프로젝트: 와디즈 서비스 클론으로 구현하기</h1>
프론트엔드 3명/ 백엔드 2명과 함께 프로젝트를 진행하였습니다.

## overview
펀딩을 만드는 메이커와 실제 펀딩에 참여하는 일반 사용자, 두 측면의 사용자에게 제공되는 서비스 (펀딩 메이커와 펀딩 참여) 클론 구현
실제 입력되는 데이터들을 POST하여 database에 저장하고 그 데이터들을 GET하여 view로 보여지는 flow 구현

## 기술 스텍

<ul>
  <li>React.js</li>
  <li>styled component</li>
  <li>React-router</li>
  <li>Javascript</li>
  <li>axios & fetch</li>
</ul>

## 페이지
<ul>
  <li>회원가입</li>
  <li>로그인</li>
  <li>메이커 등록</li>
  <li>프로젝트 메이커 (펀딩 상품 등록)</li>
  <li>펀딩 상품 상세</li>
  <li>결제</li>
</ul>

## 세부사항

<ul>
  <li>회원가입시 비밀번호 확인 및 적정 검사 기능</li>
  <li>로그인시 암호화 토큰으로 개별 유저 인식 기능</li>
  <li>구현한 각 페이지들 간 router 연동 기능</li>
  <li>펀딩 상품 등록 시 필요 데이터 POST 및 데이터 베이스에 저장된 데이터 GET하여 상품 리스트 페이지에 구현</li>
  <li>펀딩상품 생성시 필요한 데이터 및 메이킹 완료된 펀딩상품에 필요한 데이터 C.R.U.D 구현</li>
  <li>draftjs를 사용하여 rich text editor 구현 및 서버와 통신을 통한 데이터 전송 구현</li>
  <li>cra로 프로젝트 생성 및 common.js와 reset.scss 적용 및 config.js로 공통 api주소 정리 및 사용</li>
  <li>NODE_PATH src로 설정 후 절대경로 사용</li>
  <li>Scrum 기반 에자일 활용한 협업: 팀원들간 TRELLO를 활용하여 1주 간격 스프린트 기준의 스크럼 방식으로 프로젝트 진행</li>
</ul>

## 데모 영상

<a href="https://www.youtube.com/watch?v=po1Vagsnp1g">동영상 링크</a>
