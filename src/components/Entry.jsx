import React from "react";
import EmojiIMG from "./EmojiIMG";
import EmojiTitle from "./EmojiTitle";
import Definition from "./Definition";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <EmojiIMG emojiInfo={props.emoji} />
        <EmojiTitle emojiInfo={props.name} />
      </dt>
      <dd>
        <Definition emojiInfo={props.definition} />
      </dd>
    </div>
  );
}

export default Entry;
