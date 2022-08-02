import React from 'react';

import aboutMe from '../assets/md/aboutMe.md';
import MarkdownCode from '../components/MarkdownCode';

const AboutMe = () => {
  return (
    <>
      <MarkdownCode url={aboutMe}></MarkdownCode>
    </>
  );
};

export default AboutMe;
