import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import AddCard from "../components/AddCard";
import CardInfoList from "../components/CardInfoList";
import useLocalStorage from "../hooks/useLocalStorage";
import Editcard from "../components/EditCard";
import WatchHistory from "../components/WatchHistory";

const AppRouter = () => {
  const [cards, setCards] = useLocalStorage("cards", []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route
              render={(props) => (
                <CardInfoList {...props} cards={cards} setCards={setCards} />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                <AddCard {...props} cards={cards} setCards={setCards} />
              )}
              path="/add"
            />
            <Route
              render={(props) => (
                <Editcard {...props} cards={cards} setCards={setCards} />
              )}
              path="/edit/:id"
            />
            <Route
              render={(props) => <WatchHistory {...props} />}
              path="/history"
            />
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
