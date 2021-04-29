import React from 'react';

const DeleteIcon = ({ onClick = null }) => {
  return (
    <svg
      onClick={onClick}
      xmlns='SVG namespace '
      height='20px'
      viewBox='0 0 24 24'
      width='20px'
      fill='#7e8ba3'
    >
      <path d='M0 0h24v24H0z' fill='none'></path>
      <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'></path>
    </svg>
  );
};

export default DeleteIcon;
