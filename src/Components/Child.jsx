import React from "react";
import { Button } from "react-bootstrap";
import { useAppContext } from "../Context/appContext";

const Child = () => {
  const { theme, setTheme } = useAppContext();
  return (
    <div>
      <Button onClick={() => setTheme(theme === "Dark" ? "white" : "Dark")}>
        DarkMode
      </Button>
    </div>
  );
};

export default Child;
