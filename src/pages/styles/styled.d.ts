import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;

      blue: string;
      gray: string;
      white: string;
    };

    fonts: {
      book: string;
      medium: string;
      bold: string;
      black: string;
    };
  }
}
