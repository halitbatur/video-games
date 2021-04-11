import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoGamesPage from "../src/containers/videoGamesPage/VideoGamesPage";
import ContactPage from "../src/containers/contactPage/ContactPage";
import Navbar from "../src/components/navbar/Navbar";

interface iRoute {
  path: string;
  linkName: string;
  shadow: string;
  Component: () => JSX.Element;
}

export const ROUTES: iRoute[] = [
  {
    path: "/video-games",
    linkName: "VIDEO GAMES",
    shadow: "VIDEO",
    Component: VideoGamesPage,
  },
  {
    path: "/video-games/contact",
    linkName: "CONTACT",
    shadow: "CONTACT",
    Component: ContactPage,
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
