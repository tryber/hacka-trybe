import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const DefesaCivilTT = () => {
  return (
    <section className="twitterContainer">
    <div className="twitter-embed">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="defesacivilbh"
        options={{
          tweetLimit: "10",
          width: "100%",
          height: "100%"
        }}
        theme="dark"
        noHeader="true"
        noBorders="true"
        noFooter="true"
      ></TwitterTimelineEmbed>
    </div>
  </section>
  );
};

export default DefesaCivilTT;
