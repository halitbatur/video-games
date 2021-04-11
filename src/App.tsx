import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import VideoGamesPage from "../src/containers/videoGamesPage/VideoGamesPage";
import Navbar from "../src/components/navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <VideoGamesPage />
          </Route>
          <Route path="/contact">Contact Page</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
