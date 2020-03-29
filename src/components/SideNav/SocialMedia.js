import React from "react";

export function SocialMedia() {
  let media = require("../../data/socialMedia.json");
  console.log(media);

  return (
    <div className="socialMedia">
      {media.map(site => (
        <ul>
          <li>
            <a href={site.siteUrl} target="-_blank">
              <i className={"fa fa-" + site.siteName}></i></a>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default SocialMedia;
