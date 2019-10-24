// react import
import React from 'react';

// local import
import { IMovie /* interface import */ } from './Movie';

// style import
import './MovieCard.css';

interface ICard {
  imovie: IMovie,
}


const Card: React.FC<ICard> = (props) => {
  let str: any[] = []

  props.imovie.Ratings.forEach((e: Object, i) => {
    str.push(e);
  });

  return (
    <div id="card">
      <div id="poster">
        <img id="poster" src={props.imovie.Poster} alt="poster" title="Poster" />
      </div>

      <div id="info">
        <table>
          <tbody>
            <tr>
              <td className="tag">Title</td>
              <td>{props.imovie.Title || 'null'}</td>
            </tr>

            <tr>
              <td className="tag">Year</td>
              <td>{props.imovie.Year || 'null'}</td>
            </tr>

            <tr>
              <td className="tag">Rated</td>
              <td>{props.imovie.Rated || 'null'}</td>
            </tr>

            <tr>
              <td className="tag">Released</td>
              <td>{props.imovie.Realeased || 'null'}</td>
            </tr>

            <tr>
              <td className="tag">Runtime</td>
              <td>{props.imovie.Runtime || 'null'}</td>
            </tr>

            <tr>
              <td className="tag">Genre</td>
              <td>{props.imovie.Genre || 'null'}</td>
            </tr>

            <tr>
              <td className="tag">Director</td>
              <td>{props.imovie.Director || 'null'}</td>
            </tr>

            <tr>
              <td className="tag">Writer</td>
              <td>{props.imovie.Writer.join(', ') || 'null'}</td>
            </tr>

            <tr>
              <td className="tag">Actors</td>
              <td>{props.imovie.Actors.join(', ') || 'null'}</td>
            </tr>

            <tr>
              <td className="tag">Plot</td>
              <td>{props.imovie.Plot || 'null'}</td>
            </tr>

            <tr>
              <td className="tag">Language</td>
              <td>{props.imovie.Language.join(', ') || 'null'}</td>
            </tr>

            <tr>
              <td className="tag">Country</td>
              <td>{props.imovie.Country || 'null'}</td>
            </tr>

            <tr>
              <td className="tag">Awards</td>
              <td>{props.imovie.Awards || 'null'}</td>
            </tr>

            <tr>
              <td className="tag">Ratings</td>
              <td>{str.map((e, i) => { return <p key={i}>Source: {e.Source}, Value: {e.Value} </p> })}</td>
            </tr>

            <tr>
              <td className="tag">Metascore</td>
              <td>{props.imovie.Metascore || 'null'}</td>
            </tr>

            <tr>
              <td className="tag">imdbRating</td>
              <td>{props.imovie.imdbRating || 'null'}</td>
            </tr>

            <tr>
              <td className="tag">imdbVotes</td>
              <td>{props.imovie.imdbVotes || 'null'}</td>
            </tr>

            <tr>
              <td className="tag">imdbID</td>
              <td>{props.imovie.imdbID || 'null'}</td>
            </tr>

            <tr>
              <td className="tag">Type</td>
              <td>{props.imovie.Type || 'null'}</td>
            </tr>

            <tr>
              <td className="tag">DVD</td>
              <td>{props.imovie.DVD || 'null'}</td>
            </tr>

            <tr>
              <td className="tag">BoxOffice</td>
              <td>{props.imovie.BoxOffice || 'null'}</td>
            </tr>

            <tr>
              <td className="tag">Production</td>
              <td>{props.imovie.Production || 'null'}</td>
            </tr>

            <tr>
              <td className="tag">Website</td>
              <td>{props.imovie.Website || 'null'}</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Card;