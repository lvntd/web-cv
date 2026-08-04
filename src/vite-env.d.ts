/// <reference types="vite/client" />

// Font files are imported via `new URL(..., import.meta.url)`, not as modules,
// but declare them so any future direct import is typed too.
declare module '*.ttf' {
  const src: string
  export default src
}
