# FLOW: 개발자를 위한 지식 공유 플랫폼

## Getting Start
```bash
## 의존성, 라이브러리 설치
npm install
## 빌드
npm run build
## 실행
npm start
```


## Tech Stack
- React
- tailwindcss
- zustand

## User Flow Chart
```mermaid
flowchart LR
Start --> registerd?
registerd? --> |Yes| SignIn
```

## Environment Variables
- REACT_APP_KAKAO_CLIENT_ID= https://developers.kakao.com/
- REACT_APP_GOOGLE_CLIENT_ID= https://cloud.google.com/
- REACT_APP_GITHUB_CLIENT_ID= https://github.com/devridge-team-project
- REACT_APP_NAVER_CLIENT_ID= https://developers.naver.com/main/