import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
     <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
     </Layout>
    </BrowserRouter>
  );
};

export default Router;