import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    baseFontSize: number;
    rem: (pixels: number) => string;
    shadow: (shade: string) => { boxShadow: string };
    transition: (duration?: string, timing?: string) => { transition: string };
    size: (x?: string, y?: string) => { width: string; height: string };
    sameSize: (v?: string) => { width: string; height: string };
    hexToRgba: (hex: string, alpha?: number) => string;
    gradient: (primary: string, secondary: string, direction?: string) => string;
    gradientText: (primary: string, secondary: string, direction?: string) => string;
    gradient: (primary: string, secondary: string, direction?: string) => string;

    topLeft: { top: number; left: number };
    absolute: { position: 'absolute', top: number; left: number };
    fixed: { position: 'fixed'; top: number; left: number };
    screen: { position: 'fixed'; top: number; left: number; width: string; height: string; zIndex: number };
    screenContainer: { position: 'absolute'; top: number; left: number; width: string; height: string };
    defDoubleDot: { content: string; position:'absolute'; display: string };
    bgStyle: { backgroundRepeat: string; backgroundSize: string };

    color: {
      [key:string]:string;
    };

    flex: {
      [key:string]:CSSObject;
    };
  }
}
