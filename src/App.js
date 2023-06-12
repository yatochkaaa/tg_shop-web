import React from "react";
import "./App.css";
const tg = window.Telegram.WebApp;

const App = () => {
  React.useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className="app">
      Work
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
};

export default App;
