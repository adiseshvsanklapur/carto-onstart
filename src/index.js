import React from 'react';
import ReactDOM, { unstable_renderSubtreeIntoContainer } from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home'
import About from './About'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
