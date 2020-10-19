import React from "react";

import "../css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      Copyright © By Your Side
      {new Date().getFullYear()}
      {"."}
    </div>
  );
}

export default Footer;
