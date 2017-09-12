import React from 'react';
import PropTypes from 'prop-types';

const MemeEntry = ({ url, text }) => (
  <div className="myMeme">
    <img src={url} alt="" />
    <span className="memeText">{text}</span>
  </div>
);

MemeEntry.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MemeEntry;
