import React from "react";
import Svg, { Path } from "react-native-svg";

const Invalid = (props) => {
    return (
        <Svg viewBox="0 0 20 20" width={props.size} height={props.size}>
            <Path fill={props.color} fillRule="evenodd" d="M0 10c0 5.523 4.477 10 10 10s10-4.477 10-10S15.523 0 10 0 0 4.477 0 10zm18 0a8 8 0 11-16 0 8 8 0 0116 0zm-7 3v2H9v-2h2zm0-2V5H9v6h2z" clipRule="evenodd"></Path>
        </Svg>
    );
}

export default Invalid;