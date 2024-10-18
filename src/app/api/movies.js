// src/app/api/movies.js
export default async function handler(req, res) {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=81bfde4b5a2a7c882f2602c98f0a3cce&language=en-US&page=1");
    
    if (!response.ok) {
      res.status(500).json({ message: "Failed to fetch data" });
      return;
    }
  
    const data = await response.json();
    res.status(200).json(data);
  }
  