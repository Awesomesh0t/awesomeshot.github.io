import React from "react";
import Link from "@docusaurus/Link";

const BannerText = () => {
  return (
    <div className="banner_content">
      <h1>Awesomeshot</h1>
      <p className="banner_desc">
        A command-line screenshot tool written in bash 5.1.16+
      </p>

      <div className="banner_btns">
        <Link to="" style={{ textDecoration: "none" }}>
          <button className="banner_btn">
            <img src="/icons/install.svg" />
            Install
          </button>
        </Link>
      </div>
    </div>
  );
};

const BannerHome = () => {
  return (
    <div className="banner">
      <BannerText />

      <img
        className="banner_img_left"
        src="/img/awesomeshot.png"
        alt="Awesomeshot"
      />

      <img 
        className="banner_img_right"
        src="/img/awesomeshot2.png"
        alt="Awesomeshot 2"
      />

      <img 
        className="banner_img"
        src="/img/awesomeshot3.png"
        alt="Awesomeshot 2"
      />

      <img 
        className="banner_img"
        src="/img/awesomeshot.gif"
        alt="Awesomeshot GIF"
      />

      <img 
        className="banner_img"
        src="/img/awesomeshot2.gif"
        alt="Awesomeshot 2 GIF"
      />
 

    </div>
  );
};

export default BannerHome;
