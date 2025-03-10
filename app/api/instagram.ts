import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { url } = req.query;

    if (!url || typeof url !== "string") {
      return res.status(400).json({ error: "Invalid URL" });
    }

    const response = await fetch(`https://www.instagram.com/oembed/?url=${url}`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch Instagram data");
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching Instagram data:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
