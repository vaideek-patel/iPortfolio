import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PortfolioDetails from "../pages/PortfolioDetails.jsx";
import Layout from '../components/Layout/Layout.jsx';
import HomePage from '../pages/HomePage.jsx';
import ServiceDetails from '../pages/ServiceDetails.jsx';

const RouteFile = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="portfolio_details" element={<PortfolioDetails />} />
        <Route path="service_details" element={<ServiceDetails />} />
      </Route>
    </Routes>
  );
};

export default RouteFile;
