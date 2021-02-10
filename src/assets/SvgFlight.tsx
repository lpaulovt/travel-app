import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFlight(props) {
  return (
    <Svg
      height={15}
      width={15}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 426.667 426.667"
      {...props}
      fill="#000">
      <Path d="M416 298.667V256L245.333 149.333V32c0-17.707-14.293-32-32-32s-32 14.293-32 32v117.333L10.667 256v42.667l170.667-53.333v117.333l-42.667 32v32l74.667-21.333L288 426.667v-32l-42.667-32V245.333L416 298.667z" />
    </Svg>
  );
}

export default SvgFlight;
