// react import
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// local import
import api from './../../services/api';
import Card from './MovieCard';

// style import
import './Movie.css';

export interface IMovie {
  Title: string,
  Year: number,
  Rated: string,
  Realeased: string,
  Runtime: string,
  Genre: string[],
  Director: string,
  Writer: string[],
  Actors: string[],
  Plot: string,
  Language: string[],
  Country: string,
  Awards: string,
  Poster: string,
  Ratings: string[],
  Metascore: number,
  imdbRating: string,
  imdbVotes: string,
  imdbID: string,
  Type: string,
  DVD: string,
  BoxOffice: string,
  Production: string,
  Website: string,
  Response: boolean
}


const Movie: React.FC = () => {
  const [movie, setMovie] = useState<IMovie>();
  let { name } = useParams();
  const [title, setTitle] = useState(name ? name : '');

  useEffect(() => {
    document.title = 'Search Movie';
  }, []);

  if (title !== '') {
    getMovie();
  }

  let imovie: IMovie = {
    Title: '',
    Year: 0,
    Rated: '',
    Realeased: '',
    Runtime: '',
    Genre: [],
    Director: '',
    Writer: [],
    Actors: [],
    Plot: '',
    Language: [],
    Country: '',
    Awards: '',
    Poster: '',
    Ratings: [],
    Metascore: 0,
    imdbRating: '',
    imdbVotes: '',
    imdbID: '',
    Type: '',
    DVD: '',
    BoxOffice: '',
    Production: '',
    Website: '',
    Response: false
  }

  async function getMovie() {

    const params = {
      t: title
    };

    const { data } = await api.get('', { params });

    imovie = {
      Title: data.Title,
      Year: parseInt(data.Year),
      Rated: data.Rated,
      Realeased: data.Released,
      Runtime: data.Runtime,
      Genre: data.Genre ? data.Genre.split(',') : [],
      Director: data.Director,
      Writer: data.Writer ? data.Writer.split(',') : [],
      Actors: data.Actors ? data.Actors.split(',') : [],
      Plot: data.Plot,
      Language: data.Language ? data.Language.split(',') : [],
      Country: data.Country,
      Awards: data.Awards,
      Poster: data.Poster,
      Ratings: data.Ratings ? data.Ratings : [],
      Metascore: parseInt(data.Metascore),
      imdbRating: data.imdbRating,
      imdbVotes: data.imdbVotes,
      imdbID: data.imdbID,
      Type: data.Type,
      DVD: data.DVD,
      BoxOffice: data.BoxOffice,
      Production: data.Production,
      Website: data.Website,
      Response: Boolean(data.Response)
    }

    setMovie(imovie);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    getMovie();
  }

  return (
    <>
      <div id="search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={e => { setTitle(e.target.value) }}
            placeholder="Digite o nome do filme"
            autoFocus
            required />
        </form>
      </div>

      {movie !== undefined ? (<Card imovie={movie} />) : (<></>)}
    </>
  );
}

export default Movie;
