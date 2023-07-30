"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const pwsord = document.querySelector("#psword");
const confirmPwsord = document.querySelector("#confirm-psword");
const registerBtn =document.querySelector("button");

registerBtn.addEventListener("click",register)

function register(e){
    e.preventDefault();
    const req={
        id:id.value,
        name:name.value,
        psword:psword.value,
        confirmPwsord:confirmPwsord.value
    }
    fetch("/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(req),
    }).then((res)=>res.json()).
       then((res)=>{
        if(res.success){
            location.href="/login"
        }else{
            alert(res.msg)
        }
       }).catch((err)=>{
        console.error(new Error("회원가입 중 에러 발생"))
       })
}


