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
- router는 클라이언트의 요청을 연결해주는 부분 =>
  (req,res)=>{res.render("home/index")} ctrl 부분 분리

## 9강. app.listen() 모듈화
- bin/www.js
- www.js 에서 app.js 불러옴
- node bin/www.js

## 10강. package.json|package-lock.json|
## 11강. 깃과 깃허브에 노드 프로젝트 업롣,
## 12강. 폴더 구조 최적화
## 13강. 프론트를 위한 JS 만들기 | public 폴더 연결
## 14강. nodemon으로 서버 띄우기 | 개발 생산성 높이기|
## 15강. dom으로 html 객체 제어하기 | 프론트 기능 구현
## 16강. fetch|프론트에서 서버로 데이터 보내기
- JSON.stringify(req) : object data를 문자열로 body에 담아서 전달
- method: post
- headers:{
    Content-Type:"application/json"
} : 내가 보내는 데이터의 타입 명시
## 17강. 로그인 API 만들기 in 서버 | 프론트의 요청 데이터 파싱 | body-parser
- view를 렌더링하는 ctrl =>ctrl.output.함수명
- process 관련 ctrl => ctrl.process.함수명
- npm install body-parser -s : req.body를 읽어내기 위해 설치
- app.use(bodyParser.json()); : json data 파싱하기 위함
- app.use(bodyParser.urlencoded({extended:true})):URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결

## 18강. 로그인 인증 기능 만들기 in 서버 | 유저 데이터 만들기
- res.json()의 반환값은 promise이다.
기본 res의 반환 값은 response인데, json()메서드를 통해 response 스트림을 읽을수 있다.
response는 데이터가 모두 받아진 상태가 아니다.
json()으로 response스트림을 가져와 완료될 때까지 읽는다.
다 읽은 body의 텍스트를 promise 형태로 반환한다.

## 19강. 서버의 응답데이터 처리 | 유저 데이터 만들기
- catch() 구문을 통해 정의되지 않은 에러를 잡음

## 20강. MVC의 모델(M) 만들기 | 객체 지향 프로그래밍(OOP) | UsetStorage 클래스
- MODEL : 데이터를가지고 있는 무언가, 데이터를 조작, 제어해주는 애
- static : 정적 변수를 만들기 위함. 인스턴스 생성 이전에 바로 프로퍼티에 접근가능하게 해줌
- static #users : 은닉화, 접근 불가능하게 + 메서드로 전달 => static getUsers( return this.#users)

## 21강. User 모델 만들기 | 객체 지향 프로그래밍 | 인스턴스화 |
- users class 생성
- usersStorage 내부에 getUsersInfo 메소드 작성 : id를 넣으면 유저의 정보를 모두 반환하는 메소드
```
login(){
        const {id, psword}=UserStorage.getUsersInfo("woorimIT");
        if(id){
            if(id===this.body.id&&psword===this.body.psword){
                return {success:true}
            }
            return {success:false, msg:"비밀번호가 틀렸습니다"}
        }
        return {success:false, msg:"존재하지 않는 아이디입니다"}
    }
```
## 22강. 로그인 화면 꾸미기 | 오픈소스 사용해보기 | 코드펜(codepen)
- codepen comments 스크롤 최하단의 저작권 확인하고 사용하기

## 23강. 회원가입 화면 만들기 | 오픈소스 사용해보기 | 코드펜(codepen)

## 24강. 회원가입 요청 구현 in 프론트 | fetch | ajax
- form 태그 클릭시 새로고침 => e.preventDefault()

## 25강. 회원가입 라우팅 & 기능구현 in 서버 | 깃 버전 관리 | tag
- 서버가 꺼지면 유저 데이터가 날라가는 구조
- 깃허브 버전 명시, tag 기록




