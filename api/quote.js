// api/quote.js

export default async function handler(req, res) {
    const API_KEY = process.env.API_KEY;
  
    try {
      const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: {
          "X-Api-Key": API_KEY,
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Something went wrong." });
    }
  }
  