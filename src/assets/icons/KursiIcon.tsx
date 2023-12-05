import { CustomIconProps } from "@constant/props"
import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function KursiIcon({
  width= 40,
  height= 40,
  fillColor= '#00FF7F',
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
      <Path
        d="M10 11h6a4 4 0 014 4v14a3 3 0 00-3-3h-7V11zM30 11h-6a4 4 0 00-4 4v14a3 3 0 013-3h7V11z"
        stroke={fillColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export {KursiIcon}
