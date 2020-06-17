import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import { routes } from "../services/routes";
import MainPage from "../pages/MainPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import AboutDevelopersPage from "../pages/AboutDevelopersPage/AboutDevelopersPage";

import AdminPage from "../pages/AdminPage/AdminPageContainer";

import AdminStocksEditor from './AdminStocksEditor' // !!Убрать!!

import AuthPage from "../pages/AuthPage";

import PromoList from "../components/PromoList";
import PizzaList from "../components/PizzaList/PizzaListContainer";

import Header from "./Header";
import Spinner from "./Spinner";
import UserPage from "../pages/UserPage/UserPage";
import Footer from "./Footer/Footer";

const DessertsList = lazy(() => import("../components/DessertsList"));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={routes.MAIN_PAGE} exact component={MainPage} />
          <Route path={routes.DESSERTS} exact component={DessertsList} />
          <Route path={routes.PIZZA} component={PizzaList} />
          <Route path={routes.PROMO} component={PromoList} />
          <Route path={routes.ORDER_PAGE} component={OrderPage} />
          <Route path={routes.ADMIN_PAGE} component={AdminStocksEditor} /> 
          {/* !!Восстановить AdminPage!! */}
          <Route path={routes.ABOUT_DEV_PAGE} component={AboutDevelopersPage} />
          <Route path={routes.AUTH} component={AuthPage} />
          <Route path={routes.CLIENT_PAGE} component={UserPage} />
          {/* <Redirect to="#" /> */}
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

// Rokkitt;
// bold 700

// Oswald;
// bold
// normal
// 500

// Roboto
// normal
// bold
// 500
