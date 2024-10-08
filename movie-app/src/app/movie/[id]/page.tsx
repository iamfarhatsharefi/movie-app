// src/app/movie/[id]/page.tsx
import React from 'react';

const MovieDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=81bfde4b5a2a7c882f2602c98f0a3cce&language=en-US`);

    if (!res.ok) {
      throw new Error('Failed to load movie details.');
    }

    const movie = await res.json();

    return (
      <div>
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full max-w-md"
        />
        <p className="mt-4">{movie.overview}</p>
      </div>
    );
  } catch (error) {
    return <p>{error.message}</p>;
  }
};

export default MovieDetails;
