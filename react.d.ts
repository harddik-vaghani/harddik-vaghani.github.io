declare namespace React {
  export type ReactNode = any;
  export type CSSProperties = Record<string, any>;
  export type Key = string | number | any;
}

declare module "react" {
  export default React;
  export = React;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
