import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') 
  {return res.status(405).json({message:'Method not allowed'})}

  try {
    const {email} = req.body

    if (!email) {return res.status(400).json({message:'E-mail is required'})}
    const user = await prisma.user.findUnique({where:{email}})

    if (!user) {return res.status(404).json({message:'User not found'})}
    res.status(200).json({message:'Email exists'})
  } 
  
  catch (error) {
    console.error('Error while checking email existence:', error)
    res.status(500).json({message:'Error while checking email existence', error})
  }
}
