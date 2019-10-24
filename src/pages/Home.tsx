// react import
import React from 'react';
import { Link } from 'react-router-dom';

// local import
import logoMovie from './movie.svg';
import logoNote from './note.svg';

export const Home: React.FC = () => {
  return (
    <div id="home">
      <div className="link">
        <Link to="/movie">
          <img src={logoMovie} alt="movie" title="Movie" width="100" />
          {/* Icons made by Smashicons from www.flaticon.com */}
        </Link>

        <Link to="/note">
          <img src={logoNote} alt="note" title="Note" width="100" />
          {/* Icons made by Smashicons from www.flaticon.com */}
        </Link>
      </div>
    </div>
  );
}