import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobList from "./components/JobList";
import About from "./components/How-It-Works";
import Footer from "./components/Footer/Footer";
import Navbar1 from "./components/Navbar/Navbar1";
import { createContext } from "react";
import React, { useState, useEffect } from "react";
import News from "./components/News";
import SearchBar from "./components/SearchBar";
import Team from "./components/Team"

const testArr = JSON.parse(localStorage.getItem("Response"));
const newsArr = JSON.parse(localStorage.getItem("News"));
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const body = document.getElementsByTagName("BODY")[0];

  const changeTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      body.style.background = "#6f91b3";
    } else {
      body.style.background = "#020b14";
      
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <Navbar1 />
      <div className="container" id={theme}>
        <div className="row">
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <SearchBar />
                    <JobList testArr={testArr} />
                    <News newsArr={newsArr} />
                  </>
                }
              />

              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
            </Routes>     
          </Router>
        </div>
      </div>
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
