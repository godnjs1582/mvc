"use strict";

const id = document.querySelector("#id");
const pwsord = document.querySelector("#psword");
const loginBtn =document.querySelector("button");

function login(){
    const req={
        id:id.value,
        psword:psword.value
    }
    console.log(req)
}

loginBtn.addEventListener("click",login)

