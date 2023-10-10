import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Folder from "./folder";
import Layout from "./Layout";
import reportWebVitals from "./reportWebVitals";
import MoviePage from "./MoviePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Folder />} />
        <Route path="movies" element={<MoviePage />} />
        <Route path="play" element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
