import React from "react";

function EmojiIMG(props) {
  return (
    <div>
      <span className="emoji" role="img" aria-label="Tense Biceps">
        {props.emojiInfo}
      </span>
    </div>
  );
}

export default EmojiIMG;
