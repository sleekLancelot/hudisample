import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { CustomIconProps } from "@constant/props"

function BackIcon({
  width= 13,
  height= 20,
  fillColor= '#000',
  props,
}: CustomIconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 13 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.037 19.593L.792 10.679a.935.935 0 010-1.358L10.037.407a1.482 1.482 0 012.04 0 1.357 1.357 0 010 1.967L4.17 10.001l7.909 7.624a1.358 1.358 0 010 1.968 1.482 1.482 0 01-2.04 0z"
        fill={fillColor}
      />
    </Svg>
  )
}

export {BackIcon}
