import React, { Component } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

class TwitterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: 3,
    };
  }
  render() {
    const { story } = this.state;
    return (
      <section className="twitterContainer">
        <div className="twitter-embed">
          <TwitterTimelineEmbed
            sourceType="list"
            id="1223715354016452609"
            options={{
              tweetLimit: {story},
              width: "257px",
              height: "160px",
            }}
            cards="hidden"
            theme="dark"
            noHeader={true}
            noBorders={true}
            noFooter={true}
          ></TwitterTimelineEmbed>
        </div>
      </section>
    );
  }
};

export default TwitterContainer;
