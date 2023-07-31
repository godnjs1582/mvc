"use strict";

const fs=require("fs").promises;

class UserStorage{

    static #getUsers(data,isAll,fields){
        const users= JSON.parse(data);
        if(isAll) return users;
        const newUsers =fields.reduce((acc,cur)=>{
            if(users.hasOwnProperty(cur)){
                acc[cur]=users[cur]
            }
            return acc
        }
        ,{})
        return newUsers;
    }

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

    static getUsers(isAll,...fields){
        return fs.readFile("./src/databases/users.json").then(
            (data) =>{
               return this.#getUsers(data,isAll,fields);
            }
        ).catch(console.err)
    }

    static getUserInfo(id){
        return fs.readFile("./src/databases/users.json").then(
            (data) =>{
               return this.#getUserInfo(data,id);
            }
        ).catch(console.err)
    }



    static async save(userInfo){
        const users = await this.getUsers(true);
        // 데이터 추가
        if(users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디입니다"
        }else{
            users.id.push(userInfo.id);
            users.name.push(userInfo.name);
            users.psword.push(userInfo.psword);
            fs.writeFile("./src/databases/users.json",JSON.stringify(users))
            return {success:true}
        }

    }
}

module.exports= UserStorage;