import { createBrowserHistory } from 'history';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Selling from './component/detail/Selling';
import Cart from './component/layout/Cart';
import Feed from './component/layout/Feed';
import Login from './component/layout/Login';
import Main from './component/layout/Main';
import Self from './component/layout/Self';
import Signup from './component/layout/Signup';
import TodayDeals from './component/layout/TodayDeals';
import FAQ from './cs/FAQ';

const history = createBrowserHistory();

const App = () => {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/*" element={<Main />}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/feed/*" element={<Feed />}></Route>
        <Route path="/productions/*" element={<Selling />} />
        <Route path="/customer_center" element={<FAQ />} />
        <Route path="/self/*" element={<Self />}></Route>
        <Route path="/sign_in" element={<Login />}></Route>
        <Route path="/sign_up" element={<Signup />}></Route>
        <Route path="/today_deals" element={<TodayDeals />} />

        {/* <Route path="/category?category_id=:id" element={<Category />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
