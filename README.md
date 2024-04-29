# ⚽ 프리미어리그 승부 예측 서비스앱 La Premiere

![image](https://github.com/yellowboxer1/La-Premiere/assets/123864276/825e1d09-87a3-400a-8ebb-35a6b36e0b74)

- 배포 URL : https://yellowboxer1.netlify.app (준비중)
- 배포 version : 1.00 (android)

<br>

## 프로젝트 소개

- 영국 프리미어 리그를 중심으로 실시간 순위, 경기 예측, 일정 및 시즌 정보 등 다양한 기능을 제공하는 스포츠 정보 제공 앱입니다.
- 내 선호팀 경기의 경기 상세 정보를 제공하며, 사전 예측 정보, 상대 정보, 최근 맞대결 정보를 통해 승부를 사전 예측 할 수 있습니다.

<br>


## 1. 개발 환경

- Front : React, styled-components
- Back-end : Python Fast API, express
- 버전 및 이슈관리 : Github
- 클라우드 서버 : Naver cloud platform, Cloudtype
- 서비스 배포 환경 : Netlify
- 디자인 : [Figma](https://www.figma.com/file/fAisC2pEKzxTOzet9CfqML/README(oh-my-code)?node-id=39%3A1814)
<br>

## 2. 프로젝트 구조

```
├── README.md
├── App.js
├── app.json
├── babel.config.js
├── babelrc.json
├── BottomNav.js
├── eas.json
├── GlobalStyles.js
├── index.js
├── metro.config.js
├── package-lock.json
├── package.json
│
├─assets
│  ├─fame
│  ├─fonts
│  └─stats
├─components
│  ├─alert.js
│  ├─datePicker.js
│  ├─fixtures.js
│  ├─match.js
│  ├─Onboarding.js
│  ├─RectangleComponent.js
│  └─SplashLaPremiere.js
├─DB
│  ├─api
│  ├─asset.js
│  ├─rank.js
│  ├─stats.js
│  └─stats.json
├─screens
│  ├─Dday.js
│  ├─FavorTeam.js
│  ├─Main.js
│  ├─matchinfo.js
│  ├─Notifications.js
│  ├─rankinfo.js
│  └─seasonStat.js
├─style
│  ├─DdayStyle.js
│  ├─fixtureStyle.js
│  ├─Mainstyle.js
│  └─MatchStyles.js
```

<br>

## 3. 개발 기간

- 전체 개발 기간 : 2024-03-04 ~ 2024-03-29
- 서비스 기획 : 2024-03-04 ~ 2024-03-08
- UI 구현 : 2024-03-08 ~ 2024-03-16
- 기능 구현 : 2024-03-10 ~ 2024-03-29

<br>

## 4. 페이지별 기능

### [초기화면]
- 서비스 접속 초기화면으로 splash 화면이 잠시 나온 뒤 다음 페이지가 나타납니다.

| 초기화면 |
|----------|
![SPLASH (1)](https://github.com/yellowboxer1/La-Premiere/assets/123864276/d947fbb3-1180-4a20-aa54-92220b35a651)
<br>
 
