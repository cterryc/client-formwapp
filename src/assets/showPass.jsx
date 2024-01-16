import * as React from 'react'

const ShowPass = ({ color = '#7c7c7c', width = '23', show }) => {
  if (show) {
    return (
      <svg
        width={width}
        xmlns='http://www.w3.org/2000/svg'
        xmlSpace='preserve'
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          strokeLinejoin: 'round',
          strokeMiterlimit: 2,
          fill: color
        }}
        viewBox='0 0 64 64'
      >
        <path
          d='M-960-256H320v800H-960z'
          style={{
            fill: 'none'
          }}
        />
        <path
          style={{
            fill: color
          }}
          d='m13.673 10.345-3.097 3.096 39.853 39.854 3.097-3.097-39.853-39.853Z'
        />
        <path
          d='m17.119 19.984 2.915 2.915c-3.191 2.717-5.732 6.099-7.374 9.058l-.005.01c4.573 7.646 11.829 14.872 20.987 13.776 2.472-.296 4.778-1.141 6.885-2.35l2.951 2.95c-4.107 2.636-8.815 4.032-13.916 3.342-9.198-1.244-16.719-8.788-21.46-17.648 2.226-4.479 5.271-8.764 9.017-12.053Zm6.63-4.32c2.572-1.146 5.355-1.82 8.327-1.868.165-.001 2.124.092 3.012.238a18.45 18.45 0 0 1 1.659.35C45.472 16.657 51.936 24.033 56 31.632c-1.705 3.443-3.938 6.803-6.601 9.682l-2.827-2.827c1.967-2.12 3.607-4.48 4.87-6.769 0 0-1.27-2.042-2.233-3.324a37.988 37.988 0 0 0-1.954-2.395c-.54-.608-2.637-2.673-3.136-3.103-3.348-2.879-7.279-5.138-11.994-5.1-1.826.029-3.582.389-5.249.995l-3.127-3.127Z'
          style={{
            fillRule: 'nonzero',
            fill: color
          }}
        />
        <path
          style={{
            fill: color
          }}
          d='m25.054 27.92 2.399 2.398a4.843 4.843 0 0 0 6.114 6.114l2.399 2.399A8.02 8.02 0 0 1 25.054 27.92Zm6.849-4.101.148-.002a8.021 8.021 0 0 1 8.017 8.017l-.001.148-8.164-8.163Z'
        />
      </svg>
    )
  } else {
    return (
      <svg
        width={width}
        xmlns='http://www.w3.org/2000/svg'
        xmlSpace='preserve'
        style={{
          fillRule: 'evenodd',
          // clipRule: 'evenodd',
          strokeLinejoin: 'round',
          strokeMiterlimit: 2,
          fill: color
        }}
        viewBox='0 0 64 64'
      >
        <path
          d='M-896-256H384v800H-896z'
          style={{
            fill: 'none'
          }}
        />
        <path
          style={{
            fill: color
          }}
          d='M32.513 13.926c10.574.15 19.249 9.657 23.594 17.837 0 0-1.529 3.129-2.963 5.132a46.344 46.344 0 0 1-2.191 2.826 41.265 41.265 0 0 1-1.698 1.898c-5.237 5.5-12.758 9.603-20.7 8.01-8.823-1.77-16.02-9.33-20.346-17.461 0 0 1.536-3.132 2.978-5.132a45.105 45.105 0 0 1 2.034-2.617 41.618 41.618 0 0 1 1.691-1.897c4.627-4.876 10.564-8.63 17.601-8.596Zm-.037 4c-5.89-.022-10.788 3.267-14.663 7.35a37.553 37.553 0 0 0-1.527 1.713 41.472 41.472 0 0 0-1.854 2.386c-.589.816-1.193 1.846-1.672 2.721 3.814 6.409 9.539 12.198 16.582 13.611 6.563 1.317 12.688-2.301 17.016-6.846a37.224 37.224 0 0 0 1.534-1.715c.7-.833 1.366-1.694 1.999-2.579.586-.819 1.189-1.851 1.667-2.727-3.958-6.625-10.73-13.784-19.082-13.914Z'
        />
        <path
          style={{
            fill: color
          }}
          d='M32.158 23.948c4.425 0 8.018 3.593 8.018 8.017a8.021 8.021 0 0 1-8.018 8.017 8.021 8.021 0 0 1-8.017-8.017 8.022 8.022 0 0 1 8.017-8.017Zm0 4.009a4.01 4.01 0 0 1 4.009 4.008 4.01 4.01 0 0 1-4.009 4.009 4.01 4.01 0 0 1-4.008-4.009 4.01 4.01 0 0 1 4.008-4.008Z'
        />
      </svg>
    )
  }
}
export default ShowPass
