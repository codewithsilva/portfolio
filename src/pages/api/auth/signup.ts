  import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

import argon2 from "argon2"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")

  if (req.method === "OPTIONS") {return res.status(200).end()}

  if (req.method === "POST") {
    try {
      const {name, email, password} = req.body,
      userExists = await prisma.user.findUnique({where:{email}})

      console.log(name, email, password)

      if (userExists) {
        return res.status(400).json({message:"E-mail already registered"})
      }

      const hashedPassword = await argon2.hash(password),
      user = await prisma.user.create({ 
      data:{name, email, password:hashedPassword}}),
      secretKey = process.env.JWT

      if (!secretKey) {
        return res.status(500).json({message:"JWT secret is not defined"})
      }

      console.log(user)
      const token = jwt.sign({
      id:user.id, email:user.email, name:user.name}, 
      secretKey, {expiresIn: "12h"})

      res.status(201).json({message:"User registered successfully", token, user })
    } 
    
    catch (error) {
      res.status(500).json({ message: "Error registering user", error })
    }
  } 
  
  else {
    res.setHeader("Allow", ["POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
