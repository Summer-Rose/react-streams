import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

//Router types
//BrowserRouter -
//React router looks for the top level domain
//looks for everything after that
// cares only about /pageTwo for example
//Is the most complicated to deploym but lots of tools to help
//traditional server: recieves route, checks if there is a route
//generates some html, sends it back to Browser
//If it doesn't have a route, it returns 404 error
//In a react server:
//recieves route, looks for development resources for 'pageTwo'
//looks in public directory, if nothing it returns the index.html -- NOT a 404 error;
//server has no idea what pageTwo is, but the Browser sees the links and knows what to do
//history object tells the Browser what to show
//when to use BrowserRouter:
//
//HashRouter -
//automatically puts # in url and path after
//Why?
//server router ignores everythign after # so it always returns index.html file
//the applicationw ill then look what is after the hash and use that info to
//determine what to show on the screen
//its more flexible and easier to configure
//Use when deploying to Github Pages
//MemoryRouter -
//url is not used at all to track nav.
//url does not change when navigates between "pages"
