import { createBrowserHistory } from 'history';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Main from './component/layout/Main';

const history = createBrowserHistory();

const App = () => {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/*" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
