// src/app/movie/[id]/page.tsx
import React from 'react';

// Since getServerSideProps is not available in Next.js 13+ app directory
// We'll use the built-in async function to fetch data for the page
const MovieDetails = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=81bfde4b5a2a7c882f2602c98f0a3cce&language=en-US`);

  if (!res.ok) {
    return <p>Failed to load movie details.</p>;
  }

  const movie = await res.json();

  return (
    <div>
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p className="mt-4">{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
