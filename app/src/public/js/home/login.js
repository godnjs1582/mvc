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
    console.log(JSON.stringify(req))
    fetch("/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(req), 
    })
}

loginBtn.addEventListener("click",login)

