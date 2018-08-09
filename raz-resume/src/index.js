import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-css/themes/default/assets/fonts/icons.ttf';

import PropTypes from 'prop-types';
import React from 'react';

import { raz, resumeType } from '../raz-resume';
import Default from './themes/default/main';

const themes = {
  default: Default,
};

ReactDOM.render(
  <Resume jsonResume={raz} theme="default" />,
  document.getElementById("root")
);

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

export default Resume;
