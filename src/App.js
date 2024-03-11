import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Components/Main_Components/Login";
import Header from "./Components/Main_Components/Header";
import { Grid } from "@mui/material";
import Sidebar from "./Components/Main_Components/Sidebar";
import SignUp from "./Components/Main_Components/SignUp";
import Users from "./Components/Pages/UsersList";
import Cases from "./Components/Pages/AllCaseDetails";
import CompleteCases from "./Components/Pages/CompleteCases";
import PendingCases from "./Components/Pages/PendingCases";
import Sardar from "./Components/Pages/Sardar";

function App() {
  const isLogin = JSON.parse(window.localStorage.getItem('login'));
  return (
    <div>
      <Router>
        <Grid container sx={{ flexGrow: 1 }}>
          {isLogin && <Header />}
          <Grid item xs={0} md={isLogin ? 2.3 : 0} xl={isLogin ? 1.7 : 0}>
            {isLogin && <Sidebar />}
          </Grid>
          <Grid item xs={12} md={isLogin ? 9.7 : 0} xl={isLogin ? 10.3 : 0}>
            <Routes>
              <Route path="/" element={isLogin ? <Users /> : <Auth />} />
              <Route path="/signup" element={isLogin ? <Users /> : <SignUp />} />
              <Route path="/assign" element={isLogin && <Sardar />} />
              <Route path="/pending-cases" element={isLogin && <PendingCases />} />
              <Route path="/complete-cases" element={isLogin && <CompleteCases />} />
              <Route path="/all-cases/:userNo" element={isLogin && <Cases />} />
            </Routes>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;