# 우리밋
## 1강. 오리엔테이션
- 풀스텍 강의
- 모듈화
- mvc
---
- 웹서버 : 서버가 가지고 있는 정보를 브라우저에 응답하는 서버
---
- aws,mysql 이용
- oop
- tdd
---
- 깊이 보다 넓이!!

## 2강. 개발 환경 세팅
- git, vsc 설치
- 리눅스 기반의 터미널 사용
- node 설치 : LTS,최소 8버전 이상 설치 권장

## 3강. express로 서버 띄워보기
- mkdir login-lecture
- app.js
- npm install --save =>package.json 모듈 관리 쉬움
- node app.js

## 4강. http로 서버 띄워보기
- express 없이 http로 서버 띄우기
- 한글 깨짐 현상 있음
- req.url로 url에 따라 res.end()
```
const http = require("http");
const app =http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"})
    if(req.url==="/"){
        res.end("여기는 루트입니다")
    }else if(req.url==="/login"){
        res.end("this is login")
    }
});

app.listen(3001, ()=>{
    console.log("http로 가동된 서버입니다")
})
```

## 5강. 로그인 화면 만들기
- <html lang="ko"> : 웹페이지에게 어떤 언어로 적혀져 있는지 알려주는 역할

## 6강. 로그인 뷰(VIEW) 최적화 | MVC의 V 분리하기
- npm install ejs -s
- app.set("views","./views");
- app.set("view engine", "ejs");
- res.render("home/login")

## 7강. 라우팅 분리
- use strict : 최신 es
- app.use("/", home) : 미들웨어를 등록해주는 메소드
- const router = express.Router();

## 8강. MVC의 C(controller) 분리하기
