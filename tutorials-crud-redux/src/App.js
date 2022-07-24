
import './App.css';
import React from "react";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import AddTutorial from "./components/addTutorialForm";
import Tutorial from "./components/tutorial";
import TutorialsList from "./components/tutorialList";
import {Provider} from 'react-redux'

import { initStore } from './redux';
const store = initStore();
function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <nav >
                  <a href="/tutorials" >
                      CRUD
                  </a>
                  <div >
                      <li >
                          <Link to={"/tutorials"} >
                              Tutorials
                          </Link>
                      </li>
                      <li >
                          <Link to={"/add"} >
                              Add
                          </Link>
                      </li>
                  </div>
              </nav>
              <Routes>
                  <Route exact path="/" element={<TutorialsList/>} />
                  <Route exact path="/tutorials" element={<TutorialsList/>} />
                  <Route exact path="/add" element={<AddTutorial/>} />
                  <Route path="/tutorials/:id" element={<Tutorial/>} />
              </Routes>
          </BrowserRouter>,
      </Provider>
  );
}

export default App;
