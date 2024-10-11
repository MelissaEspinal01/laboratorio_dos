import dbLocal from "db-local";
// import {path} from "express/lib/application"


const {Schema} = new dbLocal({path:'./db'})

const User = Schema('User',{
    _id:{type:String,required:true},
    username: {type:String,required:true},
    password: {type:String,required:true}

})

export default class {
    static create({username,password}){
        Validation.name(username)
        Validation.password(password)
        console.log("username:" + username , "password" + password);
        const userDuplicated = User.finOne({username})
        if (userDuplicated) throw new Error('User duplicated')

            const id = crypto.randomUUID

            User.create({
                _id: id,
                username:username,
                password:password
        
        }).save()
        return id
    }

    static login ({username,password}){
        Validation.username(username)
        Validation.password(password)

        const user=User.finOne({username})
        if(!user) throw new Error("User does not exist")

        return user
    }

}




export class Validation{
    static name(username){
        if(typeof username != 'string') throw new
        Error('The username must be string')
        if (username.length < 3) throw new
        Error('The username must be more 3 characters')
        
    }



    static password(password){
        if(typeof password != 'string') throw new
        Error('The password must be string')
        if(password.length < 6) throw new
        Error('The password must be more 6 characters')
    }
}