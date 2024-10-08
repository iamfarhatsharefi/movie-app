// src/app/page.tsx

import React from 'react';
import Link from 'next/link';

const HomePage = async () => {
  // Fetching movie data directly inside the component
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=81bfde4b5a2a7c882f2602c98f0a3cce&language=en-US&page=1');

  // Error handling
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-semibold mb-6">Popular Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.results.map((movie: any) => (
          <div key={movie.id} className="card p-4 hover:bg-gray-800">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-accent">{movie.title}</h3>
              <p className="text-gray-400">{movie.overview}</p>
              <Link href={`/movie/${movie.id}`}>
                <button className="bg-accent text-black rounded-lg px-4 py-2 mt-4 hover:bg-yellow-400 transition-colors duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
