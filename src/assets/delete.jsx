import * as React from 'react'
const DeleteSvg = ({ stroke }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 72 72'>
    <g
      style={{
        fill: 'none',
        stroke,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 10,
        strokeWidth: 2
      }}
    >
      <path d='M31 16v-4h10v4M51 25v31a4 4 0 0 1-4 4H25a4 4 0 0 1-4-4V25M17 16h38v4H17zM41 28.25V55M31 28.25V55' />
    </g>
  </svg>
)
export default DeleteSvg
