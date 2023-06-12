import React from "react";
import { useTelegram } from "./hooks/useTelegram";
import "./App.css";

const App = () => {
  const {tg, onToggleButton} = useTelegram();

  React.useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="app">
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
};

export default App;
