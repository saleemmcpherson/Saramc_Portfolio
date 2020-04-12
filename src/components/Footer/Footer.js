import React, { Component } from "react";

function SocialMedia() {
  let media = require("../../data/socialMedia.json");
  console.log(media);

  return (
    <div className="followMe">
      <ul>
        {media.map((site) => (
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
      <div>
        <SocialMedia />
      </div>
    );
  }
}

export default Footer;
