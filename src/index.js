//dependency
import React from 'react';
import { render } from "react-dom";
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

//css
import './index.css';

//Routes
import App from "./App";
import Home from "./routes/home";
import Test from "./routes/test";
import Result from "./routes/result";
import Contributor from "./routes/contributor";
import Error404 from "./routes/error404";

// Components
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
render(
  <HashRouter basename="/">
    <Routes>

      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="test/:params" element={<Result />} />
        {/* <Route path="contributor" element={<Contributor />} /> */}
        <Route path="*" element={<Error404 />}></Route>
      </Route>
    </Routes>
  </HashRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
