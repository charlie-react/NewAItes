import { cookies } from "next/headers"
import jwt from "jsonwebtoken"
import prisma from "./prisma"
export default async function getUserFromSession(){
    const cookiesCheck = await cookies()
    const token = cookiesCheck.get("authToken")?.value
    let user =null

    if(token){
        try {
            const decodeToken = jwt.verify(token,process.env.JWT_SECRET)
            user = await prisma.user.findUnique({
                where:{id:decodeToken.userId},
                select:{id:true,name:true,email:true}
            })
            return user
        } catch (err) {
           return null
        }
    }
}