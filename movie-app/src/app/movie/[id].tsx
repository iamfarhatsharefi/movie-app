// src/app/movie/[id].tsx

import React from 'react';

export async function getServerSideProps({ params }) {
  const { id } = params;

  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=81bfde4b5a2a7c882f2602c98f0a3cce&language=en-US`);
  
  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const movie = await res.json();

  return {
    props: {
      movie,
    },
  };
}

const MovieDetails = ({ movie }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p className="mt-4">{movie.overview}</p>
      {/* Add more movie details here as needed */}
    </div>
  );
};

export default MovieDetails;
