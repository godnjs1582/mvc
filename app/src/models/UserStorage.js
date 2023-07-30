"use strict";
class UserStorage{
    static #users = {
        id:["woorimIT","나개발","김팀장"],
        psword:["1234","1234","123456"],
        name:["우리밋","나개발","김승민"]
    };
    // input 'id', 'name' => ...fields => fields = ['id','name']
    // output {id: this.#users.id, psword: this.#users.password }


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
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); //[id,psword,name]
        const userInfo = usersKeys.reduce((acc,cur)=>{
            acc[cur]=users[cur][idx];
            return acc
        },{})
        return userInfo
    }
}

module.exports= UserStorage;