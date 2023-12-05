import { CustomIconProps } from "@constant/props"
import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"

function JannahIcon({
  width= 40,
  height= 40,
  fillColor= '#F03891',
  props,
}: CustomIconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={20} cy={20} r={20} fill={fillColor} fillOpacity={0.25} />
      <G clipPath="url(#clip0_2499_1919)">
        <Path
          d="M28.84 12.61a5.499 5.499 0 00-7.78 0L20 13.67l-1.06-1.06a5.501 5.501 0 10-7.78 7.78l1.06 1.06L20 29.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
          stroke={fillColor}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2499_1919">
          <Path fill="#fff" transform="translate(8 8)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export {JannahIcon}
