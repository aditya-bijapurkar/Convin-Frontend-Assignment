import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import AddCard from "../components/AddCard";
import CardInfoList from "../components/CardInfoList";
import useLocalStorage from "../hooks/useLocalStorage";
import Editcard from "../components/EditCard";
import WatchHistory from "../components/WatchHistory";
import VideoPlayerModal from "../components/VideoPlayerModal";

const AppRouter = () => {
  const [cards, setCards] = useLocalStorage("cards", []);
  const [past, setPast] = useLocalStorage("past", []);

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
              render={(props) => (
                <WatchHistory {...props} past={past} setPast={setPast} />
              )}
              path="/past"
            />
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
