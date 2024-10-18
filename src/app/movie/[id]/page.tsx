// src/app/movie/[id]/page.tsx

import React from 'react';
import Image from 'next/image';

// Define types for the movie data
type Genre = {
  id: number;
  name: string;
};

type ProductionCompany = {
  id: number;
  name: string;
};

type Movie = {
  title: string;
  overview: string;
  release_date: string;
  runtime: number;
  genres: Genre[];
  vote_average: number;
  vote_count: number;
  poster_path: string;
  production_companies: ProductionCompany[];
};

const MovieDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=81bfde4b5a2a7c882f2602c98f0a3cce&language=en-US`);

    if (!res.ok) {
      throw new Error('Failed to load movie details.');
    }

    const movie: Movie = await res.json(); // Specify the Movie type

    return (
      <div className="p-6 max-w-4xl mx-auto">
        {/* Movie Title */}
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>

        <div className="flex flex-col md:flex-row">
          {/* Movie Poster */}
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
            className="w-full md:w-1/2 mb-4 md:mb-0"
          />

          <div className="md:ml-6 flex flex-col">
            {/* Movie Overview */}
            <h2 className="text-2xl font-semibold mb-2">Overview</h2>
            <p className="mb-4">{movie.overview}</p>

            {/* Movie Additional Information */}
            <h3 className="text-xl font-semibold">Details</h3>
            <ul className="list-disc ml-5 mb-4">
              <li><strong>Release Date:</strong> {movie.release_date}</li>
              <li><strong>Runtime:</strong> {movie.runtime} minutes</li>
              <li><strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}</li>
              <li><strong>Rating:</strong> {movie.vote_average} / 10</li>
              <li><strong>Votes Count:</strong> {movie.vote_count}</li>
            </ul>

            {/* Production Companies */}
            <h3 className="text-xl font-semibold">Production Companies</h3>
            <ul className="list-disc ml-5">
              {movie.production_companies.map((company) => (
                <li key={company.id}>{company.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return <p>{error.message}</p>;
    } else {
      return <p>An unexpected error occurred</p>;
    }
  }
};

export default MovieDetails;
