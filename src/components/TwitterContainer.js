import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterContainer = () => {
  return (
    <section className="twitterContainer">
      <div className="twitter-embed">
        <TwitterTimelineEmbed
          sourceType="list"
          id="1223715354016452609"
          options={{
            tweetLimit: "100",
            width: "350px",
            height: "350px",
          }}
          cards = "hidden"
          theme="dark"
          noHeader= {true}
          noBorders = {true}
          noFooter = {true}
        ></TwitterTimelineEmbed>
      </div>
    </section>
  );
};

export default TwitterContainer;
