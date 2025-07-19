// import { PrismaClient } from "@prisma/client";
// import { NextApiRequest, NextApiResponse } from "next";
// import jwt from "jsonwebtoken";

// const prisma = new PrismaClient();
// const secret = process.env.JWT || "";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "GET") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   // Check for the Authorization header
//   const authHeader = req.headers.authorization;
//   if (!authHeader) {
//     return res.status(401).json({ error: "Authorization header missing" });
//   }

//   // Extract the token from the Authorization header
//   const token = authHeader.split(" ")[1];

//   try {
//     // Verify the JWT and get the user ID from it
//     const decoded = jwt.verify(token, secret) as { id: string };
//     const userId = decoded.id;

//     // Query for all questions and include related data (ratings in this case)
//     const surveys = await prisma.question.findMany({
//       where: {
//         // If you want to filter questions based on userId, uncomment the following line
//         // userId: userId,
//       },
//       include: {
//         ratings: true,  // Include ratings for each question
//         company: true,  // Include the company details if relevant
//       },
//     });

//     console.log("Fetched surveys:", surveys);

//     // Return the fetched surveys
//     return res.status(200).json({ surveys });
//   } catch (error) {
//     console.error("JWT/Auth error:", error);
//     return res.status(401).json({ error: "Invalid or expired token" });
//   }
// }

