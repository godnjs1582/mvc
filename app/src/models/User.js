"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        const client=this.body;
        const{id,psword} = await UserStorage.getUserInfo(client.id)

        if(id){
            if(id===client.id&&psword===client.psword){
                return {success:true}
            }
            return {success:false, msg:"비밀번호가 틀렸습니다"}
        }
        return {success:false, msg:"존재하지 않는 아이디입니다"}
    }

    async register(){
        try{
            const client = this.body
            const response = await UserStorage.save(client);
            return response
        }catch(error){
            const a= {success:false, msg:error}
            console.log(a.msg)
            return
        }

    }
}

module.exports=User;