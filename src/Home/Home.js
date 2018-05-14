import React from "react";
import {
  Link
} from 'react-router-dom'
import "./Home.css";

import { READING } from "../constants";

const Home = () => (
  <div className="Home-container">
    <div className="Home-inner-container">
      <h3 className="text">Nick Stradford</h3>
      <ul className="Home-links">
        <li><a rel="noopener noreferrer" href="https://twitter.com/nickstrad" target="_blank">Twitter</a></li>    
        <li><a rel="noopener noreferrer" href="https://github.com/triplednick" target="_blank">GitHub</a></li>    
        <li><a href="mailto:nickstradford@gmail.com" target="_top">Email</a></li>    
        <li><Link rel="noopener noreferrer" to={READING}>Reading List</Link></li>    
      </ul>
    </div>
  </div>
);

export default Home ;
