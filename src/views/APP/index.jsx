import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Box } from "@mui/material";

import Home from "../Home";
import SearchResult from "../SearchResult";
import VideoDetailPage from "../VideoDetailPage";
import Playlist from "../Playlist";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Login from "../Login";
import Signup from "../Signup";
import { useLightModeState } from "../../context/themeMode";

import "./style.css";

const App = (props) => {
  const lightMode = useLightModeState();
  // const [authTokens, setAuthTokens] = useState();

  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";

  // const setTokens = (data) => {
  //   localStorage.setItem("tokens", JSON.stringify(data));
  //   setAuthTokens(data);
  // };
  return (
    // <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>

    <Box class={!lightMode ? "darkMode" : "lightMode"}>
      {!isSignupPage && !isLoginPage && <Navbar />}
      {!isLoginPage && !isSignupPage && <Sidebar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoDetailPage />} />
        {/* <Route
            path="/video/:id"
            element={
                <PrivateRoute>
                    <VideoDetailPage />
                </PrivateRoute>
            }
        /> */}
        <Route path="/search/:searchTerm" element={<SearchResult />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/playlist" element={<Playlist />} />
        {/* <Route
          path="/video/:id"
          element={
            <PrivateRoute>
              <VideoDetailPage />
            </PrivateRoute>
          }
        /> */}
      </Routes>
    </Box>
    // </AuthContext.Provider>
  );
};

export default App;
