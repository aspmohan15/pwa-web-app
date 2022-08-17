import React from "react";
import { useAppContext } from "../Context/appContext";

const Content = () => {
  const { theme, setTheme } = useAppContext();
  return (
    <>
      <div
        style={{
          backgroundColor: theme === "Dark" ? "black" : "red",
          color: theme === "Dark" ? "white" : "black",
        }}
      >
        Content
      </div>
    </>
  );
};

export default Content;
