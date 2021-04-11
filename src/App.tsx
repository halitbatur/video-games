import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import VideoGamesPage from "../src/containers/videoGamesPage/VideoGamesPage";
import Navbar from "../src/components/navbar/Navbar";

interface Route {
  path: string;
  linkName: string;
  shadow: string;
  Component: () => JSX.Element;
}

export const ROUTES: Route[] = [
  {
    path: "/",
    linkName: "VIDEO GAMES",
    shadow: "VIDEO",
    Component: VideoGamesPage,
  },
  {
    path: "/contact",
    linkName: "CONTACT",
    shadow: "CONTACT",
    Component: VideoGamesPage,
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          {ROUTES.map(({ path, Component }) => (
            <Route exact path={path} key={path}>
              <Component />
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
