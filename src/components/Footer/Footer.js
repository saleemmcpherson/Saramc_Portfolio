import React, { Component } from "react";
import { StyledFooter } from "./Footer.styled";

function SocialMedia() {
  let media = require("../../data/socialMedia.json");
  console.log(media);

  return (
    <div className="followMe">
        {media.map(site => (
          <div key={site.id}>
            <a href={site.siteUrl} target="-_blank">
              <i className={"fa fa-" + site.siteName}></i>
            </a>
          </div>
        ))}
    </div>
  );
}

export class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <SocialMedia />
      </StyledFooter>
    );
  }
}

export default Footer;
