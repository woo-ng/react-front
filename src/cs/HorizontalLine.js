import React from "react";

const HorizonLine = ({ text }) => {
    return (
        <div
        style={{
            width: "100%",
            textAlign: "center",
            borderBottom: "5px solid #aaa",
            lineHeight: "0.1em",
            margin: "10px 0 20px",

        }}
        >
            <span style={{ background: "rgb(247, 249, 250)", padding: "0.1rem", width: "1px"}}>{text}</span>
        </div>
    );
  };
  export default HorizonLine;   