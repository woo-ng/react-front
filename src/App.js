import { createBrowserHistory } from 'history';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Login from './component/layout/Login';
import Main from './component/layout/Main';

const history = createBrowserHistory();

const App = () => {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/*" element={<Main />}></Route>
        <Route path="/sign_in" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
