import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBookMark(props) {
  return (
    <Svg
      width={20}
      height={24}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.9 0h6.17c2.71 0 4.9 1.07 4.93 3.79v15.18c0 .17-.04.34-.12.49-.13.24-.35.42-.62.5-.26.08-.55.04-.79-.1l-6.48-3.24-6.49 3.24c-.149.079-.32.13-.49.13-.56 0-1.01-.46-1.01-1.02V3.79C0 1.07 2.2 0 4.9 0zm-.68 7.62h7.53c.43 0 .78-.351.78-.79 0-.44-.35-.79-.78-.79H4.22c-.43 0-.78.35-.78.79 0 .439.35.79.78.79z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgBookMark;
