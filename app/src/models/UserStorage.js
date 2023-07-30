"use strict";

const fs=require("fs").promises;

class UserStorage{

    static #getUserInfo(data,id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); //[id,psword,name]
        const userInfo = usersKeys.reduce((acc,cur)=>{
        acc[cur]=users[cur][idx];
        return acc
        },{})
        return userInfo
    }

    static getUsers(...fields){
        const users = this.#users;
        const newUsers =fields.reduce((acc,cur)=>{
            if(users.hasOwnProperty(cur)){
                acc[cur]=users[cur]
            }
            return acc
        }
        ,{})
        return newUsers;
    }

    static getUserInfo(id){
        fs.readFile("./src/databases/users.json").then(
            (data) =>{
               return this.#getUserInfo(data,id);
            }
        ).catch(console.err)
    }



    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return {success:true}
    }
}

module.exports= UserStorage;