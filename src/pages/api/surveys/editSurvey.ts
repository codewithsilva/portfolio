import { PrismaClient } from "@prisma/client"; 
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { questionId, question } = req.body;

  console.log('Received:', { questionId, question });

  if (!questionId || !question || typeof question !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing "questionId" or "question"' });
  }

  try {
    const updatedQuestion = await prisma.question.update({
      where: {
        id: questionId,
      },
      data: {
        question,
      },
    });

    res.status(200).json({ message: 'Question updated successfully', question: updatedQuestion });
  } catch (error) {
    console.error('Error updating question:', error);
    res.status(500).json({ error: 'Failed to update question' });
  }
}
