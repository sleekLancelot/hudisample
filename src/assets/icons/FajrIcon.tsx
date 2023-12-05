import { CustomIconProps } from "@constant/props"
import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function FajrIcon({
  width= 40,
  height= 40,
  fillColor= '#8959F4',
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
        d="M25 26a5 5 0 10-10 0M20 10v7M12.22 18.219l1.42 1.42M9 26h2M29 26h2M26.36 19.639l1.42-1.42M31 30H9M16 14l4-4 4 4"
        stroke={fillColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export {FajrIcon}
