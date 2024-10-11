import UseRepository from "../repository/UseRepository.js"

export const Usecontroller = {
    async registrer(req,res){
        const {username, password} = req.body
        console.log(username.password)
        try{
            const responseDate= UseRepository.create(
                username,
                password
            )
            res.send({
                status:true,
                id:responseDate,
                message: "Registrer sucessfull"
            })


        } catch (error){
            res.send({
                status:false,
                message:error.message
            })
        }

        
    },

    async login(req,res){
        try{
            const {username,password}=req.body
            const responseDate=UseRepository.login({username,password})
            res.sed({
                status:true,
                message:"Login succesfull",
                data: responseDate
            })
        }catch(error) {
            res.send({
                status:false,
                message:'Error ${error,message}'
            })
        }
    }
}