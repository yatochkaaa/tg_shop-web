import React from "react";
import Button from "../button/Button";

const Header = () => {
  const tg = window.Telegram.WebApp;

  React.useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <header>
      <Button onClick={onClose}>Закрыть</Button>
      <span className="username">{tg.initDataUnsafe?.user?.username}</span>
    </header>
  );
}

export default Header;