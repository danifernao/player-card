import Cover from "./CardCover";
import Sidebar from "./CardSidebar";
import PlayerInfo from "./CardPlayerInfo";
import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import data from "../assets/data.json";

export const CardContext = createContext();

function Card() {
  const location = useLocation();
  const [pathname, setPathname] = useState(null);
  const baseUrl = import.meta.env.BASE_URL;

  const handlePathChange = (name) => {
    document.body.style.backgroundImage = data[name].background
      ? `url("${baseUrl}images/${data[name].background}")`
      : "none";

    if (data[name].theme) {
      document.body.classList.toggle("dark", data[name].theme === "dark");
      document.body.classList.toggle("light", data[name].theme === "light");
    }

    if (data[name].title) {
      document.title = `Lo que juego | ${data[name].title}`;
    }
  };

  useEffect(() => {
    let currPathname = location.pathname.slice(1);
    currPathname = currPathname in data ? currPathname : Object.keys(data)[0];
    setPathname(currPathname);
    handlePathChange(currPathname);
  }, [location.pathname]);

  return (
    <CardContext value={[data, pathname, baseUrl]}>
      {pathname && (
        <>
          <div className="card">
            <Cover />
            <PlayerInfo />
          </div>
          <Sidebar />
        </>
      )}
    </CardContext>
  );
}

export default Card;
