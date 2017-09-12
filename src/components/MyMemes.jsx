import React from 'react';
import PropTypes from 'prop-types';
import MemeEntry from './MemeEntry';

const MyMemes = props => (
  <div className="myMemes">
    {props.myMemes.map((meme, i) =>
      <MemeEntry
        key={i}
        url={meme.url}
        text={meme.text}
      />
    )}
  </div>
);

MyMemes.propTypes = {
  myMemes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default MyMemes;
