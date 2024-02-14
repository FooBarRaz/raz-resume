import PropTypes from 'prop-types';
import React from 'react';
import { render } from 'react-snapshot';
import { raz, resumeType } from './raz-resume';

import Resume from 'react-awesome-resume';
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

render(
  <Resume jsonResume={raz} theme="default" />,
  document.getElementById("root")
);

export default Resume;
