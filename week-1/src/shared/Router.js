import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./Layout";
import WritePost from "../pages/WritePost"

const Router = () => {
  return (
    <BrowserRouter>
     <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<WritePost />} />
      </Routes>
     </Layout>
    </BrowserRouter>
  );
};

export default Router;