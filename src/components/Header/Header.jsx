import React from "react";
import Button from "../button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import "./Header.css";

const Header = () => {
  const {user, onClose} = useTelegram();

  return (
    <header>
      <Button onClick={onClose}>Закрыть</Button>
      <span className="username">{user?.username}</span>
    </header>
  );
}

export default Header;