import React from 'react';
import Resume from 'react-awesome-resume';
import { render } from 'react-snapshot';
import 'semantic-ui-css/semantic.min.css';
import { raz } from './raz-resume';

render(
  <Resume jsonResume={raz} theme="default" />,
  document.getElementById("root")
);

export default Resume;
