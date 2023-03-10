import { createBrowserHistory } from 'history';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Feed from './component/layout/Feed';
import Login from './component/layout/Login';
import Main from './component/layout/Main';
import Member from './component/layout/Member';
import Selling from './component/layout/Selling';
import TodayDeals from './component/layout/TodayDeals';
import FAQ from './cs/FAQ';

const history = createBrowserHistory();

const App = () => {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/*" element={<Main />}></Route>
        <Route path="/feed/*" element={<Feed />}></Route>
        <Route path="/member" element={<Member />}></Route>
        <Route path="/productions/*" element={<Selling />} />
        <Route path="/customer_center" element={<FAQ />} />
        <Route path="/sign_in" element={<Login />}></Route>
        <Route path="/today_deals" element={<TodayDeals />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
