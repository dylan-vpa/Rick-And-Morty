import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="aboutMe">
          <h3 className="title3">About me</h3>
          <br />
          <p className="pf">My name is Dylan Alexander...</p>
          <p className="pf">
            I'm 14 years old, I'm a junior web developer that always do his
            best, I'm new in this world, but I try it
          </p>
        </div>
        <div className="socialNetworks">
          <h3 className="title3">Follow me</h3>
          <br />
          <a href="https://www.instagram.com/invites/contact/?i=gdf8tdca3j90&utm_content=mz39axt">
            <img
              src="https://icones.pro/wp-content/uploads/2021/02/instagram-icone-gris.png"
              className="SocialNetwork"
              id="ig"
            />
          </a>
          <br />
          <a href="https://twitter.com/AProgrammerCat">
            <img
              src="https://icones.pro/wp-content/uploads/2021/02/icones-twitter-grises.png"
              className="SocialNetwork"
              id="twitter"
            />
          </a>
        </div>
        <div className="thanks">
          <h3 className="title3">Thanks for support this page</h3>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="footerEnd">
        <p className="pf">❮❯ by Dylan</p>
      </div>
    </>
  );
}

export default Footer;
