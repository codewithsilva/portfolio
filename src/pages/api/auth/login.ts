import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

import argon2 from "argon2"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")

  if (req.method === "OPTIONS") {return res.status(204).end()}

  if (req.method === "POST") {
    try {
      const {email, password} = req.body,
      user = await prisma.user.findUnique({where:{email}})
      
      if (!user) {return res.status(404).json({message:"User not found"})}

      const isValid = await argon2.verify(user.password, password)
      if (!isValid) {
        return res.status(400).json({message:"Invalid credentials"})
      }

      const secretKey = process.env.JWT
      if (!secretKey) {
        return res.status(500).json({message:"JWT secret is not defined"})
      }

      console.log(user)
      const token = jwt.sign({id:user.id, 
      email:user.email, name:user.name}, secretKey, {expiresIn:'12h'})

      console.log({message:"Login successful!", token, user})
      return res.status(200).json({message:"Login successful!", token, user})
    } 
    
    catch (error) {
      console.error("Login error:", error)
      res.status(500).json({message:"Error while logging in", error})
    }
  } 
  
  else {
    res.setHeader("Allow", ["POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
