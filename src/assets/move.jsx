import * as React from 'react'
const MoveSvg = ({ stroke }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    width='22'
    height='22'
    viewBox='0 0 24 24'
  >
    <g fill={stroke}>
      <path d='M22 6a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2zM22 11a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM23 17a1 1 0 0 0-1-1H2a1 1 0 1 0 0 2h20a1 1 0 0 0 1-1z' />
    </g>
  </svg>
)
export default MoveSvg
