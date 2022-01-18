import React from "react";
import { Link } from "react-router-dom";

const SocialInfo = (props) => {
  return (
    <div className={props.styles}>
      <Link to="#">
        <i className="fab fa-twitter fa-lg"></i>
      </Link>
      <Link to="#">
        <i className="fab fa-facebook-f fa-lg" style={{ width: "20px" }}></i>
      </Link>
      <Link to="#">
        <i className="fab fa-linkedin-in fa-lg" style={{ width: "20px" }}></i>
      </Link>
      <Link to="#">
        <i className="fab fa-instagram fa-lg" style={{ width: "22px" }}></i>
      </Link>
      <Link to="#">
        <i className="fab fa-youtube fa-lg"></i>
      </Link>
    </div>
  );
};

export default SocialInfo;
