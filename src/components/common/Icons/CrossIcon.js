import React from 'react';

const CrossIcon = ({ type = null }) => {
  if (type === 'solid') {
    return (
      <svg
        width='12'
        height='12'
        viewBox='0 0 12 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z'
          fill='#5A5B5C'
        />
        <path
          d='M8.78749 8.10213C8.97703 8.29167 8.97703 8.59874 8.78749 8.78797C8.59795 8.9772 8.29087 8.97751 8.10164 8.78797L5.99949 6.68582L3.89734 8.78797C3.7078 8.97751 3.40072 8.97751 3.21149 8.78797C3.02226 8.59843 3.02195 8.29136 3.21149 8.10213L5.31364 5.99998L3.21149 3.89782C3.02195 3.70829 3.02195 3.40121 3.21149 3.21198C3.40103 3.02275 3.70811 3.02244 3.89734 3.21198L5.99949 5.31413L8.10164 3.21198C8.29118 3.02244 8.59826 3.02244 8.78749 3.21198C8.97672 3.40152 8.97703 3.70859 8.78749 3.89782L6.68534 5.99998L8.78749 8.10213Z'
          fill='white'
        />
      </svg>
    );
  } else {
    return (
      <svg
        width='12'
        height='10'
        viewBox='0 0 10 10'
        fill='#888888'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M9.66671 1.27337L8.72671 0.333374L5.00004 4.06004L1.27337 0.333374L0.333374 1.27337L4.06004 5.00004L0.333374 8.72671L1.27337 9.66671L5.00004 5.94004L8.72671 9.66671L9.66671 8.72671L5.94004 5.00004L9.66671 1.27337Z' />
      </svg>
    );
  }
}

export default CrossIcon;
