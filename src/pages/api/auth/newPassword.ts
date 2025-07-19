import { NextApiRequest, NextApiResponse } from 'next'
import argon2 from 'argon2'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
  return res.status(405).json({message:'Method not allowed'})}

  try {
    const {email, newPassword} = req.body

    if (!email || !newPassword) {
    return res.status(400).json({ message:'E-mail and new password are required'})}

    const user = await prisma.user.findUnique({where:{email}})
    if (!user) 
    {return res.status(404).json({message:'User not found'})}

    const hashedPassword = await argon2.hash(newPassword)
    await prisma.user.update({where:{email}, data:{password:hashedPassword}})
    res.status(200).json({ message: 'Password reset successfully!' })
  } 
  catch (error) {
    console.error('Error resetting password:', error)
    res.status(500).json({ message: 'Error resetting password', error })
  }
}
