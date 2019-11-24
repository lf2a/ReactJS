// React import
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

// local import
import Index from './pages/example_1/Index';
import Param from './pages/example_2/Param';
import HookOne from './pages/example_hooks/HookOne';
import HookTwo from './pages/example_hooks/HookTwo';
import HookThree from './pages/example_hooks/HookThree';
import Movie from './pages/movie/Movie';

const stylesheet: Object = {
  backgroundColor: '#f7f7f7',
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>

        <ul style={stylesheet}>
          <li>
            <Link to="/spa">Single App Aplication base - example</Link>
          </li>
          <li>
            <Link to='/p/123'>Test URL Params</Link>
          </li>
          <li>
            <Link to='/state'>Hook state</Link>
          </li>
          <li>
            <Link to='/effect'>Hook effect</Link>
          </li>
          <li>
            <Link to='/context'>Hook context</Link>
          </li>
          <li>
            <Link to='/movie'>movie</Link>
          </li>
          <li>
            <Link to='/movie/cars/'>movie (cars) param</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path='/spa'>
            <Index />
          </Route>
          <Route exact path='/p/:id'>
            <Param />
          </Route>
          <Route path='/state'>
            <HookOne />
          </Route>
          <Route path='/effect'>
            <HookTwo />
          </Route>
          <Route path='/context'>
            <HookThree />
          </Route>
          <Route path="/movie" exact component={Movie} />
          <Route path="/movie/:name" exact component={Movie} />
          <Route path='*'>
            erro 404
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
