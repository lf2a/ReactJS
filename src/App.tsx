
// react import
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// local import
import { Home } from './pages/Home';
import Movie from './pages/Movie';
import Note from './pages/Note';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie" component={Movie} />
        <Route path="/note" component={Note} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
