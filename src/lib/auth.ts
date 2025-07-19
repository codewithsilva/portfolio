import jwt from "jsonwebtoken"
import { NextApiRequest, NextApiResponse } from "next"

interface JwtPayload {
  userId:string; name:string; email:string;
}

interface AuthenticatedRequest extends NextApiRequest {
  user?:JwtPayload;
}

export const verifyToken = (handler: 
  (req:AuthenticatedRequest, res:NextApiResponse) 
  => Promise<void>) => 
    
  async (req:AuthenticatedRequest, res:NextApiResponse) => {
  const token = req.headers.authorization?.split(" ")[1]

  if (!token) {
    return res.status(403).json({message:"Token not provided"})
  }

  try {
    const decoded = jwt.verify(token, 
    process.env.JWT_SECRET as string) as JwtPayload
    
    req.user = decoded
    return handler(req, res)
  } 
  
  catch {
    return res.status(401).json({message:"Invalid token"})
  }
}
