import React, { Component } from "react";
import { StyledFooter } from "./Footer.styled";

function SocialMedia() {
  let media = require("../../data/socialMedia.json");
  console.log(media);

  return (
    <div className="followMe">
      <ul>
        {media.map(site => (
          <li key={site.id}>
            <a href={site.siteUrl} target="-_blank">
              <i className={"fa fa-" + site.siteName}></i>
            </a>
          </li>
        ))}
      </ul>
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
