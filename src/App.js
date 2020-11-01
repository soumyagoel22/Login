import React, { useState } from "react";
import Login from "./Pages/Login";
import MainPage from "./Pages/MainPage";
import "./styles.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [name, setName] = useState("");
  return (
    <div className="App">
      {isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} setName={setName} name={name}/>
      ) : (
        <MainPage setIsLoggedIn={setIsLoggedIn} name={name}/>
      )}
    </div>
  );
};

export default App;
