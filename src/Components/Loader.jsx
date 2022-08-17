import React from "react";
import { Spinner } from "react-bootstrap";

export const Loader = () => {
  return (
    <div className="loader d-flex justify-content-center align-items-center">
      <Spinner animation="border" />
    </div>
  );
};
