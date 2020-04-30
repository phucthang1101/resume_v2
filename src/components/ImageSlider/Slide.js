// import React from 'react';
// import styled from 'styled-components';

// const SlideStyle = styled.div`
//         height: 100%;
//       width: ${props => props.width || 0}px;
//       background-image: url('${content}');
//       background-size: cover;
//       background-repeat: no-repeat;
//       background-position: center;
// `;

// const Slide = ({ content, width }) => <SlideStyle content width />;

// export default Slide;
/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';

const Slide = ({ slide, width, caption }) => (
  <React.Fragment>
    <div
      css={css`
        display: flex;
        height: 100%;
        width: ${width}px;
        flex-direction: column;
        text-align: center;
      `}
    >
      <div
        css={css`
      height: 90%;
      width: ${width}px;
      background-image: url('${slide}');
      background-size:  ${slide === './images/daidung/prj_resp.png' ? 'contain':'cover'};
      ${slide === './images/daidung/prj_resp.png' ? 'background-position:bottom':''};
      background-repeat: no-repeat;
      ${'' /* background-position: center; */}
    `}
      ></div>
      <p>{caption}</p>
    </div>
  </React.Fragment>
);

export default Slide;
