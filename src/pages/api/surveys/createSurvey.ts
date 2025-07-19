
// import { PrismaClient } from "@prisma/client";
// import { NextApiRequest, NextApiResponse } from 'next';

// const prisma = new PrismaClient();

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   const { companyId, question, userId } = req.body;

//   if (!question || typeof question !== 'string') {
//     return res.status(400).json({ error: 'Invalid or missing "question"' });
//   }

//   try {
//     const newQuestion = await prisma.question.create({
//       data: {
//         question,
//         companyId: companyId ? companyId : null,
//       },
//     });

//   } catch (error) {
//     console.error('Error creating question:', error);
//     return res.status(500).json({ 
//       error: 'Failed to create question',
//       details: error instanceof Error ? error.message : 'Unknown error'
//     });
//   } finally {
//     await prisma.$disconnect();
//   }
// }