// React import
import React from 'react';
import { Route, Switch, useParams, useRouteMatch, Link } from 'react-router-dom';

const Param: React.FC = () => {
  let { id } = useParams();
  let { path, url } = useRouteMatch();

  return (
    <>
      ID: {id}

      <Link to={`${url}/delete`}>delete</Link>
      <Switch>
        <Route exatc path={`${path}/delete`}>
          delete
        </Route>
      </Switch>
    </>
  );
};

export default Param;