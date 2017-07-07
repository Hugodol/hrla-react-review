import React from 'react';

const MyMemes = props => (
  <div className="myMemes">
    {props.myMemes.map((meme, i) =>
      <div key={i} className="myMeme">
        <img src={meme.url} />
        <span className="memeText">{meme.text}</span>
      </div>
    )}
  </div>
);

export default MyMemes;
