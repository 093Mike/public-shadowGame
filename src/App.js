import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import SignIn from "./pages/Registro/Registro"
import PrivateRoute from './PrivateRoute';
import GameEngine from './pages/Game/GameEngine';
import Firebase from './FirebaseEngine/firebase';
import Recovery from './pages/Recovery/Recovery';



const DivTest = styled.div`
background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8));
`;

const AppWrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8));
  background-size: cover;
  background-position: center;
  width:100vw;
  height: 100vh;
  z-index: -1;
  position: absolute;
  -webkit-transition: background 5s linear,  background-image 5s linear;
  transition: background 5s linear, background-image 5s linear;
`

function App() {
  return (
    <DivTest>
      <AppWrapper id={"id_wrapper"}>
        <Router>
          <Routes>
            <Route element={<PrivateRoute />} >
              <Route path='/play' element={<GameEngine />} />
            </Route>
            <Route path='/recovery' element={<Recovery />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </AppWrapper>
    </DivTest>
  );
}

export default App;
