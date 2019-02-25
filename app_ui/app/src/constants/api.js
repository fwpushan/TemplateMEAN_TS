export const BASE_URL = (process.env.NOTE_ENV !== 'production')
  ? "http://localhost:3000"
  : window._env_.REACT_BASE_URL;