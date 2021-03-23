import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";
import React from "react";
import "../css/about.css";
import "../css/layout.css";

function About() {
  return (
    <div className="flex-col centerX centerY about-div">
      <div className="about-bg flex-col centerY centerX">
        <h3>This e-commerce was provided to you by:</h3>
        <div style={{ width: "100%" }} className="flex space-around">
          <div className="flex-col">
            <a
              href="https://github.com/antonmaenpaa"
              target="_blank"
              style={{ color: "black" }}
            >
              <GithubOutlined style={{ fontSize: "4rem", margin: ".5rem" }} />
            </a>
            <h3 style={{ textAlign: "center" }}>ANTON</h3>
          </div>
          <div className="flex-col">
            <a
              href="https://github.com/lilgujj"
              target="_blank"
              style={{ color: "black" }}
            >
              <GithubOutlined style={{ fontSize: "4rem", margin: ".5rem" }} />
            </a>
            <h3 style={{ textAlign: "center" }}>LIL GUJJ</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
