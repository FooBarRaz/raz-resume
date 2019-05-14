import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import { raz, resumeType } from './raz-resume';

import  Resume from 'react-awesome-resume';
import 'semantic-ui-css/semantic.min.css';


Resume.defaultProps = {
  jsonResume: raz,
  theme: 'default',
  inline: false,
};

Resume.propTypes = {
  jsonResume: resumeType.isRequired,
  theme: PropTypes.string,
  inline: PropTypes.bool,
};

ReactDOM.render(
  <Resume jsonResume={raz} theme="default" />,
  document.getElementById("root")
);

export default Resume;
