import React from "react";
import Svg, { Path } from "react-native-svg";

const Valid = (props) => {
    return (
        <Svg viewBox="0 0 24 24" width={props.size} height={props.size}>
            <Path fill={props.color} d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414 4.95 4.95z"></Path>
        </Svg>
    );
}

export default Valid;
