import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMenu(props) {
  return (
    <Svg
      width={17}
      height={10}
      viewBox="0 0 12 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path fill="#fff" fillOpacity={0.5} d="M0 0h12v2H0zM0 5h10V3H0z" />
    </Svg>
  );
}

export default SvgMenu;
