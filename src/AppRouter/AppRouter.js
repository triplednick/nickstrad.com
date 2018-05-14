import React from 'react';
import './AppRouter.css';

import Home from "../Home/Home";
import ReadingList from "../ReadingList/ReadingList";
import { READ, REREAD, NOT_READ, READING } from "../constants";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const AppRouter = () => (
  <Router>
    <div className="AppRouter-container">
      <ul className="nav-bar">
        <li><Link to="/">$ ./goHome</Link></li>
      </ul>

      <Route exact path="/" component={Home}/>
      <Route exact path={`/${READ}`} component={() => <ReadingList action={READ} />}/>
      <Route exact path={`/${READING}`} component={() => <ReadingList action={READING} />}/>
      <Route exact path={`/${NOT_READ}`} component={() => <ReadingList action={NOT_READ} />}/>
      <Route exact path={`/${REREAD}`} component={() => <ReadingList action={REREAD} />}/>
    </div>
  </Router>
);

export default AppRouter;
