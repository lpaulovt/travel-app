import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFrance(props) {
  return (
    <Svg
      width={50}
      height={45}
      viewBox="0 0 50 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M37.143 27.143h1.428v-5.714h-2.857l2.857-4.286H40l2.857-8.572h-4.286l-1.428-1.428h-4.286l-8.571-5.714V0l-2.857 1.429v2.857L20 5.714h-2.857v1.429h-5.714V5.714H8.57l2.858 5.715H7.143L5.714 10 0 11.429v2.857l7.143 2.857L10 21.429l2.857 1.428L10 35.714 21.429 40h4.285v-4.286l2.857-1.428h2.858l2.857 2.857h2.857l4.286-5.714H38.57l-1.428-4.286zM45.714 32.857L50 31.43v7.142l-2.857-1.428-1.429-4.286z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgFrance;
