import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/" component={MovieList } />
        <Route path="/movies/:id" component={MovieDetails } />
        <Route exact path="/movies/new" component={NewMovie } />
        <Route path="/movies/:id/edit" component={EditMovie } />
        <Route component={NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
