import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowLeft(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4.25 12.274h15M10.3 18.299l-6.05-6.024L10.3 6.25"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgArrowLeft;
