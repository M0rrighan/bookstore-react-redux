import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Books from './pages/Books';
import Categories from './pages/Categories';
import Header from './components/Header';

const App = () => (
  <Router>
    <div>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Books />}
        />
        <Route
          path="/Categories"
          element={<Categories />}
        />
      </Routes>
    </div>
  </Router>
);

export default App;
