
// react import
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// local import
import Index from './pages/spa/Index';
import Movie from './pages/movie/Movie';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/movie" exact component={Movie} />
        <Route path="/movie/:name" component={Movie} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
